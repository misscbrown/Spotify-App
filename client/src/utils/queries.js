import { gql } from "@apollo/client";

export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
      email
      post {
        _id
        postText
        createdAt
      }
    }
  }
`;

export const QUERY_ALL_POSTS = gql`
  query GetAllPosts {
    getAllPosts {
      _id
      postText
      username
      createdAt
      comments {
        _id
        commentText
        username
        createdAt
      }
    }
  }
`;

export const QUERY_ME = gql`
  query me {
    me {
      _id
      username
      email
      bio
      image
      post {
        _id
        postText
        username
        createdAt
      }
    }
  }
`;
