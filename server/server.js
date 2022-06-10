const { ApolloServer } = require('apollo-server');
const gql = require('graphql-tag');
const {authMiddleware} = require('./utils/auth')
const express = require('express')

const { typeDefs, resolvers } = require('./schemas');

const db = require("./config/connection")
const PORT = process.env.PORT || 3001;
const app = express()

const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: ({ req }) => ({ req })
})

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/'));
})

})




