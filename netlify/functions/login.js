// login.js (Netlify Function - ESM)

import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI;
const dbName = process.env.MONGODB_DB || "lunar";

export async function handler(event) {
  try {
    if (event.httpMethod !== "POST") {
      return {
        statusCode: 405,
        body: "Method Not Allowed",
      };
    }

    let body;
    try {
      body = JSON.parse(event.body);
    } catch (err) {
      return {
        statusCode: 400,
        body: "Malformed request body",
      };
    }

    const { username, password } = body;
    if (!username || !password) {
      return {
        statusCode: 400,
        body: "Missing username or password",
      };
    }

    let client;
    try {
      client = new MongoClient(uri);
      await client.connect();

      const db = client.db(dbName);
      const users = db.collection("users");

      // Check credentials
      const user = await users.findOne({ username, password });

      if (!user) {
        return {
          statusCode: 401,
          body: "Invalid credentials",
        };
      }

      return {
        statusCode: 200,
        body: "Login successful",
      };
    } catch (err) {
      console.error("MongoDB error:", err);
      return {
        statusCode: 502,
        body: "Database error",
      };
    } finally {
      if (client) await client.close();
    }
  } catch (err) {
    console.error("Server error:", err);
    return {
      statusCode: 502,
      body: "Server error",
    };
  }
}
