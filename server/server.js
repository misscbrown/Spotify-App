const { ApolloServer } = require('apollo-server');
const gql = require('graphql-tag');
const mongoose = require('mongoose');

const db = require("./config/connection")

const typeDefs = gql`
type Query {
    hello: String!
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
    server.listen( { port: 4000 } ).then(({ url }) => {
        console.log(`🚀 Server ready at ${url}`);
    }); 
})


