const { Configuration, OpenAIApi } = require('openai');
const express = require('express');
const cors = require('cors');
const { MongoClient } = require('mongodb');
require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());

const port = process.env.PORT;
const uri = process.env.URI;
const dbName = process.env.dbName;
const collectionName = process.env.collectionName;

const client = new MongoClient(uri);

// Initialize the bot and assign its persona

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
openai = new OpenAIApi(configuration); // Store the instance in the openai variable

async function initializeBot() {
  const persona = "You are a Rogerian psychotherapist. You listen empathetically and provide support. You avoid giving direct advice and encourage the user to explore their feelings. Keep responses brief and speak in the first person like a conversation. Introduce yourself and help me with my mental health. Your name is Riverbot. Do not refer to yourself as a psychotherapist, but instead use pronouns like I.";
  const initial_bot_response = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: persona,
    temperature: 0,
    max_tokens: 150,
  });
  console.log("Initial Response", initial_bot_response.data.choices[0].text);
};

//Run the function that will intialize the bot and assign its persona
initializeBot();

app.get('/api/data', async (req, res) => {
  try {
    await client.connect();
    const collection = client.db(dbName).collection(collectionName);
    const documents = await collection.find().toArray();

    res.json(documents);
  } catch (error) {
    console.error('Failed to retrieve data from MongoDB:', error);
    res.status(500).json({ error: 'Failed to retrieve data from MongoDB' });
  }
});

app.post('/api/signup', async (req, res) => {
  try {
    await client.connect();
    const collection = client.db(dbName).collection(collectionName);
    const userData = req.body;

    const existingUser = await collection.findOne({ username: userData.username });
    if (existingUser) {
      res.status(400).json({ error: 'Username already exists' });
      return;
    }

    await collection.insertOne(userData);
    res.sendStatus(200);
  } catch (error) {
    console.error('Failed to save data to MongoDB:', error);
    res.sendStatus(500);
  }
});

app.post('/api/login', async (req, res) => {
  try {
    await client.connect();
    const collection = client.db(dbName).collection(collectionName);
    const { username, password } = req.body;

    const user = await collection.findOne({ username, password });

    if (user) {
      res.sendStatus(200);
    } else {
      res.sendStatus(401);
    }
  } catch (error) {
    console.error('Failed to verify login:', error);
    res.sendStatus(500);
  }
});

app.post('/api/chat', async (req, res) => {
  try {
    const message = req.body.message; // Get the user's message from the request body

    const completion = await openai.createCompletion({ // Use the stored openai instance
      model: "text-davinci-003",
      prompt: message,
      max_tokens: 150,
    });

    const botResponse = completion.data.choices[0].text; // Get the bot's response
    console.log("Bot's Response to the User's Message:", botResponse);

    res.json({ response: botResponse }); // Send the bot's response as JSON

  } catch (error) {
    console.error('Failed', error);
    res.sendStatus(500);
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
