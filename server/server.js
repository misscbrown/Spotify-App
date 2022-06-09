const { ApolloServer } = require('apollo-server');
const gql = require('graphql-tag');
const mongoose = require('mongoose');

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

server.listen( { port: 4000 } ).then(({ url }) => {
    console.log(`🚀 Server ready at ${url}`);
});