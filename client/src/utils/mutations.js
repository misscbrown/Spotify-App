import { gql } from "@apollo/client";

// LOGIN_USER will execute the loginUser mutation set up using Apollo Server.

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

// ADD_USER will execute the addUser mutation.
export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

// ADD_POST will execute the addPost mutation.
export const ADD_POST = gql`
  mutation addPost($postText: String!) {
    addPost(postText: $postText) {
      _id
      postText
      username
      createdAt
      comments {
        _id
        commentText
      }
    }
  }
`;

// ADD_COMMENT will execute the addComment mutation.
export const ADD_COMMENT = gql`
  mutation ADD_COMMENT($postId: ID!, $commentText: String!) {
    addComment(postId: $postId, commentText: $commentText) {
      _id
      comments {
        _id
        commentText
        username
        createdAt
      }
    }
  }
`;

// DELETE_POST will execute the removePost mutation.
export const DELETE_POST = gql`
  mutation DELETE_POST($postId: ID!) {
    removePost(postId: $postId) {
      _id
      postText
      username
    }
  }
`;
