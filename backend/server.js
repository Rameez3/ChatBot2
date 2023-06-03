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

console.log("URI:", uri, "dbName:", dbName, "collectionName:", collectionName);

const client = new MongoClient(uri);

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

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
