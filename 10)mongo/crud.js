// Import the MongoClient from the mongodb package
const { MongoClient } = require('mongodb');

// Connection URI and Database Name
const uri = 'mongodb://localhost:27017';
const dbName = 'mydatabase';

// Create a new MongoClient
const client = new MongoClient(uri);

async function main() {
  try {
    // Connect the client to the MongoDB server
    await client.connect();
    console.log('Connected to MongoDB server');

    // Access the database
    const db = client.db(dbName);

    // Create a new collection
    const collection = db.collection('students');

    // Insert a document
    await collection.insertOne({ name: 'Alice', age: 25 });
    console.log('Document inserted');

    // Find a document
    const document = await collection.findOne({ name: 'Alice' });
    console.log('Found document:', document);

    // Update a document
    await collection.updateOne({ name: 'Alice' }, { $set: { age: 26 } });
    console.log('Document updated');

    // Delete a document
    await collection.deleteOne({ name: 'Alice' });
    console.log('Document deleted');
  } finally {
    // Close the client connection
    await client.close();
    console.log('Connection closed');
  }
}

// Call the main function
main().catch(console.error);



//npm install mongodb
//node crud.js
