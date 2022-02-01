require("dotenv").config();
const { MongoClient } = require("mongodb");
const url = process.env.MONGODB_URL;
let db;

async function connectToDb() {
  const client = new MongoClient(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  await client.connect();
  console.log("Connected to MongoDB");
  db = client.db();
}

// returns unique human-readable id
async function getNextSequence(name) {
  const db = getDb()
  const result = await db
    .collection("counters")
    .findOneAndUpdate(
      { _id: name },
      { $inc: { current: 1 } },
      { returnOriginal: false }
    );
  return result.value.current;
}

function getDb() {
  return db;
}

module.exports = { connectToDb, getDb, getNextSequence }