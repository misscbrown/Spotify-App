const { User, Post } = require('../models');

const resolvers = {

    Query: {
        getPosts: async () => {
            try {
                const posts = await Post.findAll();
                return posts;
            }
            catch (err) {
                throw new Error(err); ;
            }


        }
    },

}
  

module.exports = resolvers;