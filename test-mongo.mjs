import { config } from 'dotenv';
config();

import { MongoClient } from 'mongodb';

async function testMongoConnection() {
  const uri = process.env.MONGODB_URI;
  const dbName = process.env.MONGODB_DB || 'lunar';

  if (!uri) {
    console.error('MONGODB_URI environment variable is not set.');
    process.exit(1);
  }

  let client;
  try {
    console.log('Attempting to connect to MongoDB...');
    client = new MongoClient(uri);
    await client.connect();
    console.log('Connected to MongoDB successfully.');

    const db = client.db(dbName);
    await db.admin().ping();
    console.log(`Database "${dbName}" is accessible.`);

  } catch (error) {
    console.error('Failed to connect to MongoDB:', error.message);
    process.exit(1);
  } finally {
    if (client) {
      await client.close();
      console.log('Connection closed.');
    }
  }
}

testMongoConnection();
