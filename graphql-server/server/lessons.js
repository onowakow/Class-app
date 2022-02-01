const { getDb, getNextSequence } = require('./db.js')

async function getLesson(lessonId) {
  const db = getDb()
  const lesson = await db.collection('lessons').findOne({ id: lessonId })
  return lesson
}

const getArticle = (articleId, lesson) => {
  const articles = lesson.sections
  const article = articles.find(article => article.id === articleId)
  return article
}

async function addLesson(_, { lesson }) {
  const db = getDb()
  const newLesson = lesson;

  newLesson.sections = [];
  newLesson.id = await getNextSequence("lessons");

  const result = await db.collection("lessons").insertOne(newLesson);

  const savedLesson = await db
    .collection("lessons")
    .findOne({ _id: result.insertedId });

  return savedLesson;
}

async function lessonList() {
  const db = getDb()
  const lessons = await db.collection("lessons").find({}).toArray();
  return lessons;
}


async function addArticle(_, { article, lessonId }) {
  const db = getDb()

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
  const db = getDb()

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

module.exports = { modifyArticle, addArticle, addLesson, lessonList }