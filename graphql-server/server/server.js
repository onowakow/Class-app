const fs = require("fs");
const { ApolloServer } = require("apollo-server");
const { connectToDb } = require('./db.js')
const { modifyArticle, addArticle, addLesson, lessonList } = require('./lessons.js')

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
