const { gql } = require('apollo-server-express');

const typeDefs = gql`

type User {
    _id: ID!
    username: String!
    email: String
    createdAt: String

}

type Post {
    id: ID
    body: String
    username: String
    createdAt: String
}

type Query {
    me: User
}

type Auth {
    token: ID!
    user: User
}

input RegisterInput {
    username: String!
    password: String!
    confirmPassword: String!
    email: String!
}


type Query{
    getPosts: [Post]
    getPost(postId: ID!): Post
}

type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    createPost(body: String!): Post!
    deletePost(postId: ID!): String!
   
}

`;

module.exports = typeDefs;