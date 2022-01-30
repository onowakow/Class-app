require('dotenv').config()
const fs = require("fs");
const { ApolloServer } = require("apollo-server");
const { MongoClient } = require('mongodb')

const url = process.env.MONGODB_URL
let db;

async function lessonList() {
  const lessons = await db.collection('lessons').find({}).toArray()
  return lessons
}

async function connectToDb() {
  const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true })
  await client.connect()
  console.log('Connected to MongoDB at', url)
  db = client.db()
}

// INCOMPLETE
const addLesson = (_, { lesson }) => {
  const newLesson = lesson
  await connectToDb()
}

// Not currently working
const addArticle = (_, { article }) => {
  const newArticle = article;
  if (newArticle.content === undefined) {
    newArticle.content = "";
  }
  newArticle.id = articleDB.length;

  articleDB.push(newArticle);

  return newArticle;
};

const resolvers = {
  Query: {
    lessonList,
  },

  Mutation: {
    addLesson,
    addArticle,
  },
};

const server = new ApolloServer({
  typeDefs: fs.readFileSync("./server/schema.graphql", "utf-8"),
  resolvers,
});

(async function () {
  try {
    await connectToDb();
    server
      .listen({ port: 3000 })
      .then(() => console.log("Apollo server started on port 3000"));
  } catch (err) {
    console.log("Error:", err)
  }
}())



