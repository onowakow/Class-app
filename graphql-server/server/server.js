const fs = require('fs')
const { ApolloServer } = require('apollo-server')

const articleDB = [
  {
    id: 0,
    title: "Understanding React",
    content: ["Welcome to Understanding React, a guide to one of the most popular frontend frameworks. \
      The only prerequisite for this course is a working knowledge of JavaScript, HTML, and CSS as these \
      underlie the workings of React.  \
    "],
  }, 
  {
    id: 1,
    title: "Getting reoriented with this project",
    content: ["I am trying to remember how to query/mutate the server from the ui..."]
  },
  {
    id: 2,
    title: "Cats and Dogs",
    content: []
  }
]

const articleList = () => articleDB

const addArticle = (_, { article }) => {
  const newArticle = article
  if (newArticle.content === undefined) {
    newArticle.content = []
  }
  newArticle.id = articleDB.length

  articleDB.push(newArticle)
  
  return newArticle
}

const resolvers = {
  Query: {
    articleList
  },

  Mutation: {
    addArticle
  }
}

const server = new ApolloServer({
  typeDefs: fs.readFileSync('./server/schema.graphql', 'utf-8'),
  resolvers
})

server
  .listen({ port: 3000 })
  .then(
    () => console.log("Apollo server started on port 3000")
  )