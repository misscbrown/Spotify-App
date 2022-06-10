const { User, Post } = require('../models');
const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../utils/auth');



const resolvers = {

    Query: {
        // @Check code
        getPosts: async () => {
            try {
                const posts = await Post.findAll();
                return posts;
            }
            catch (err) {
                throw new Error(err);;
            }
        },
        async getPost(_, { postId }) {
            try {
                const post = await Post.findById(postId);
                if (post) {
                    return post;
                } else {
                    throw new Error('Post not found');
                }
            } catch (err) {
                throw new Error(err);
            }
        },

        me: async (parent, args, context) => {
            if (context.user) {
                const userData = await User.findOne({ _id: context.user._id })
                    .select('-__v -password')
                return userData;
            }
            throw new AuthenticationError('Not logged in');
        }
    },

    Mutation: {
        addUser: async (parent, args) => {
            const user = await User.create(args);
            const token = signToken(user);

            return { token, user };
        },
    

        createPost: async (_, { body }, context) => {
            const user = checkAuth(context);
            console.log(user);

            const newPost = new Post({
                body,
                user: user.id,
                username: user.username,
                createdAt: new Date().toISOString()
            });
            
            const post = await newPost.save();

            return post;


    },

          deletePost: async (_, { postId }, context) => {
          const user = checkAuth(context);
          console.log(user);

          try {
              const post = await Post.findById(postId);
              if(user.username === post.username){
                  await post.findByIdandDelete(postId);
                  return 'Post deleted sucessfully';
              } 
                  throw new AuthenticationError("You are not autherised to delete post")
              
            }
        
        
    },}

module.exports = resolvers;
