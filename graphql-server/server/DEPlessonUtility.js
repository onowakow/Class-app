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

const lessonUtility = { addArticle, addLesson }

module.exports = lessonUtility