require('dotenv').config()
const { MongoClient, ServerApiVersion } = require('mongodb');


passwordDB = process.env.DATABASE_PASSWORD

const uri = `mongodb+srv://FootWear:${passwordDB}@footwear.dhb4soj.mongodb.net/?retryWrites=true&w=majority`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

const connectDB = async () => {
    try {
      // Connect to MongoDB
      await client.connect();
      console.log("Connected to MongoDB successfully!");
    } catch (error) {
      console.error("Error connecting to MongoDB:", error);
      // If there's an error, you might want to throw it or handle it in some way
      throw error;
    }
  };

module.exports = connectDB

