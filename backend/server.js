const express = require('express');
const cors = require('cors');
const { MongoClient } = require('mongodb');

require('dotenv').config(); // To acess the .env file

const app = express();
app.use(cors());
app.use(express.json()); // Add this line to parse request bodies as JSON
const port = 3000;

const uri = process.env.URI;
const dbName = process.env.dbName;
const collectionName = process.env.collectionName;

app.get('/api/data', async (req, res) => {
  const client = new MongoClient(uri);

  try {
    await client.connect();

    const collection = client.db(dbName).collection(collectionName);
    const documents = await collection.find().toArray();

    // console.log(documents); // Print the retrieved data in the server console

    res.json(documents); // Send the data as a JSON response to the client
  } catch (error) {
    console.error('Failed to retrieve data from MongoDB:', error);
    res.status(500).json({ error: 'Failed to retrieve data from MongoDB' });
  } finally {
    client.close();
  }
});

app.post('/api/signup', async (req, res) => {
  const client = new MongoClient(uri);

  try {
    await client.connect();

    const collection = client.db(dbName).collection(collectionName);
    const userData = req.body; // Retrieve the userData object from the request body

    // Check if the username already exists in the database
    const existingUser = await collection.findOne({ username: userData.username });
    if (existingUser) {
      res.status(400).json({  error: 'Username already exists' });
      return;
    }

    // Insert the userData into the collection
    await collection.insertOne(userData);

    res.sendStatus(200); // Send a success status back to the client
  } catch (error) {
    console.error('Failed to save data to MongoDB:', error);
    res.sendStatus(500); // Send an error status back to the client
  } finally {
    client.close();
  }
});

app.post('/api/login', async (req, res) => {
  const client = new MongoClient(uri);

  try {
    await client.connect();

    const collection = client.db(dbName).collection(collectionName);
    const { username, password } = req.body;

    // Check if the username and password match a document in the collection
    const user = await collection.findOne({ username, password });

    if (user) {
      // Username and password match, login successful
      res.sendStatus(200);
    } else {
      // Username and password do not match, login failed
      res.sendStatus(401);
    }
  } catch (error) {
    console.error('Failed to verify login:', error);
    res.sendStatus(500); // Send an error status back to the client
  } finally {
    client.close();
  }
});



app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
