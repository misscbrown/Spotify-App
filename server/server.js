const { ApolloServer } = require('apollo-server');
const gql = require('graphql-tag');
const {authMiddleware} = require('./utils/auth')
const express = require('express')

const { typeDefs, resolvers } = require('./schemas');

const db = require("./config/connection")

const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: ({ req }) => ({ req })
})

db.once("open", ()=>{
  console.log("Database connection established")
    server.listen( { port: 4000 } ).then(({ url }) => {
        console.log(`🚀 Server ready at ${url}`);
    }); 
})




