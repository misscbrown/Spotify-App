const { ApolloServer } = require('apollo-server');
const gql = require('graphql-tag');
const mongoose = require('mongoose');

const Post = require('./model/Post')
const db = require("./config/connection")

const typeDefs = gql`
type Query {
   getPosts
}`

const resolvers = {
    Query: {
        hello: () => 'Hello world!'
    }
}


const server = new ApolloServer({
    typeDefs,
    resolvers
})

db.once("open", ()=>{
  console.log("Database connection established")
    server.listen( { port: 4000 } ).then(({ url }) => {
        console.log(`🚀 Server ready at ${url}`);
    }); 
})




