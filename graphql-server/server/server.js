require("dotenv").config();
const fs = require("fs");
const { ApolloServer } = require("apollo-server");
const { MongoClient } = require("mongodb");

const url = process.env.MONGODB_URL;
let db;

async function lessonList() {
  const lessons = await db.collection("lessons").find({}).toArray();
  return lessons;
}

// returns unique human-readable id
async function getNextSequence(name) {
  const result = await db
    .collection("counters")
    .findOneAndUpdate(
      { _id: name },
      { $inc: { current: 1 } },
      { returnOriginal: false }
    );
  return result.value.current;
}

async function connectToDb() {
  const client = new MongoClient(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  await client.connect();
  console.log("Connected to MongoDB");
  db = client.db();
}


async function addLesson(_, { lesson }) {
  const newLesson = lesson;

  newLesson.sections = [];
  newLesson.id = await getNextSequence("lessons");

  const result = await db.collection("lessons").insertOne(newLesson);

  const savedLesson = await db
    .collection("lessons")
    .findOne({ _id: result.insertedId });

  return savedLesson;
}

async function getLesson(lessonId) {
  const lesson = await db.collection('lessons').findOne({ id: lessonId })
  return lesson
}

async function getArticle(articleId, lesson) {
  const articles = lesson.sections
  const article = articles.find(article => article.id === articleId)
  return article
}

async function addArticle(_, { article, lessonId }) {
  // JSON parse/stringify seems janky, but it is the recommended apollographql workaround: https://github.com/apollographql/apollo-server/issues/3149
  const newArticle = JSON.parse(JSON.stringify(article));

  // Placeholder for blank content
  if (!newArticle.content) {
    newArticle.content = "";
  }

  // Get list of articles (called sections) in question
  const currentLesson = await db
    .collection("lessons")
    .findOne({ id: lessonId });
  const sections = currentLesson.sections;
  newArticle.id = sections.length + 1;
  sections.push(newArticle);

  const query = { id: lessonId };
  const updateDocument = {
    $set: { sections: sections },
  };

  await db.collection("lessons").updateOne(query, updateDocument);

  const updatedLesson = await db
    .collection("lessons")
    .findOne({ id: lessonId });

  const updatedArticle = updatedLesson.sections.find(
    (section) => section.id === newArticle.id
  );
  // return article
  return updatedArticle;
}

async function modifyArticle (_, { article, lessonId, articleId }) {
  const newArticle = JSON.parse(JSON.stringify(article))

  const query = { id: lessonId, "sections.id": articleId}
  const updateDocument = {
    $set: { "sections.$.content": newArticle.content, "sections.$.title": newArticle.title }
  }

  await db.collection("lessons").updateOne(query, updateDocument)

  const updatedLesson = await getLesson(lessonId)
  const updatedArticle = getArticle(articleId, updatedLesson)
  return updatedArticle
}


const resolvers = {
  Query: {
    lessonList,
  },

  Mutation: {
    addLesson,
    addArticle,
    modifyArticle
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
    console.log("Error:", err);
  }
})();
