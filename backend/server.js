const express = require('express');
const cors = require('cors');
const { MongoClient } = require('mongodb');

const app = express();
app.use(cors());
app.use(express.json()); // Add this line to parse request bodies as JSON
const port = 3000;

const uri = 'mongodb+srv://rk03:cvbnm114@useraccounts.9lvzpue.mongodb.net/';
const dbName = 'SensitiveUserData';
const collectionName = 'UserData';

app.get('/api/data', async (req, res) => {
  const client = new MongoClient(uri);

  try {
    await client.connect();

    const collection = client.db(dbName).collection(collectionName);
    const documents = await collection.find().toArray();

    console.log(documents); // Print the retrieved data in the server console

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

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
