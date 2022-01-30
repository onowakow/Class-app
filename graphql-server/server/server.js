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

// returns unique human-readable id
async function getNextSequence(name) {
  const result = await db.collection('counters').findOneAndUpdate(
    { _id: name },
    { $inc: { current: 1 } },
    { returnOriginal: false }
  );
  return result.value.current
}

async function connectToDb() {
  const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true })
  await client.connect()
  console.log('Connected to MongoDB')
  db = client.db()
}

async function addLesson (_, { lesson }) {
  const newLesson = lesson

  newLesson.sections = []
  newLesson.id = await getNextSequence('lessons')

  const result = await db.collection('lessons').insertOne(newLesson)

  const savedLesson = await db.collection('lessons')
    .findOne({ _id: result.insertedId })

  return savedLesson
}

async function addArticle (_, { article, lessonId }) {
  const newArticle = article;
  newArticle.content = '';
  
  const currentLesson = await db.collection('lessons')
    .findOne({ id: lessonId })
  
  newArticle.id = currentLesson.sections.length + 1

  const query = { id: lessonId }
  const updateDocument = {
    $push: { sections: newArticle }
  }

  await db.collection('lessons')
    .updateOne(query, updateDocument)

  const updatedLesson = await db.collection('lessons').findOne({ id: lessonId })

  const updatedArticle = updatedLesson.sections.find(section => section.id === newArticle.id)
  // return article
  return updatedArticle
}

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



