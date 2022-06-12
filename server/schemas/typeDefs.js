const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID!
    username: String!
    email: String!
    image: String
    bio: String
  }

  type Post {
    _id: ID
    postText: String
    username: String
    createdAt: String
    replies: [Reply]
  }

  type Reply {
    replyId: ID
    replyBody: String!
    username: String!
    createdAt: String
  }

  type Query {
    me: User
    getPosts: [Post]
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

  type Query {
    getPosts: [Post]
    getPost(postId: ID!): Post
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    createPost(postText: String!, username: String!): Post
    createReply(replyBody: String!, username: String!, postId: ID!): Reply
    deletePost(postId: ID!): String!
    userBio(bio: String, username: String!): User
  }
`;

module.exports = typeDefs;
