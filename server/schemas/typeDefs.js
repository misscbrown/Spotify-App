const { gql } = require('apollo-server-express');

const typeDefs = gql`

type User {
    id: ID!
    username: String!
    password: String!
    email: String

}

type Post {
    id: ID
    body: String
    username: String
    createdAt: String
}

type Query{
    getPosts: [Post]
}

`;

module.exports = typeDefs;