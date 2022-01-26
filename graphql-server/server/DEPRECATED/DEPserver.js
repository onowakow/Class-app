const fs = require('fs')

// import ApolloServer constructor
const { ApolloServer } = require("apollo-server");

let infoMessage = "Welcome to the GraphQL Server"

const usersDB = [
  {
    id: 1,
    name: 'Owen'
  }
]
const userList = () => usersDB

const setInfo = (_, { info }) => {
  infoMessage = info
  return info
}

const createUser = (_, { user }) => {
  const newUser = user
  newUser.id = usersDB.length + 1
  usersDB.push(newUser)
  return newUser
}

// resolvers 
const resolvers = {
  Query: {
    info: () => infoMessage,
    userList,
  }, 

  Mutation: {
    setInfo,
    createUser,
  }
};

// init the server by creating a new instance of the constructor
// two args: typedefs and resolvers (in an object)
const server = new ApolloServer({
  typeDefs: fs.readFileSync('./server/schema.graphql', 'utf-8'),
  resolvers,
});

// Server listen on a port. Use .then to report on successful start
server
  .listen({ port: 3000 })
  .then(({ url }) => 
    console.log(`Server started on port ${url}`)
  );
