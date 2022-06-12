const { model, Schema } = require("mongoose");
const moment = require("moment");

const postSchema = new Schema({
  postText: {
    type: String,
    required: 'You need to leave a thought!',
    minlength: 1,
    maxlength: 280,
    trim: true,
  },
  username: {
    type: String,
    required: true,
    trim: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: (timestamp) => dateFormat(timestamp),
  },
  comments: [
    {
      commentText: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 280,
      },
      username: {
        type: String,
        required: true,
      },
      createdAt: {
        type: Date,
        default: Date.now,
        get: (createdAtVal) =>
        moment(createdAtVal).format("MMM DD, YYYY [at] hh:mm a"),
      },
    },
  ],
});

const Post = model('Post', postSchema);

module.exports = Post;


// RepliesSchema
// const ReplySchema = new Schema(
//   {
//     // Set custom ID
//     replyId: {
//       type: Schema.Types.ObjectId,
//       default: () => new Types.ObjectId(),
//     },
//     replyBody: {
//       type: String,
//       required: true,
//       maxlength: 280,
//     },
//     username: {
//       type: String,
//       required: true,
//     },
//     createdAt: {
//       type: Date,
//       default: Date.now,
//       get: (createdAtVal) =>
//         moment(createdAtVal).format("MMM DD, YYYY [at] hh:mm a"),
//     },
//   },
//   {
//     toJSON: {
//       getters: true,
//     },
//   }
// );

// // PostSchema
// const PostSchema = new Schema(
//   {
//     postText: {
//       type: String,
//       required: true,
//       minlength: 1,
//       maxlength: 280,
//     },
//     createdAt: {
//       type: Date,
//       default: Date.now,
//       // Moment
//       get: (createdAtVal) =>
//         moment(createdAtVal).format("MMM DD, YYYY [at] hh:mm a"),
//     },
//     username: {
//       type: String,
//       required: true,
//     },
//     // Use ReactionsSchema to validate data
//     replies: [ReplySchema],
//   },
//   {
//     toJSON: {
//       virtuals: true,
//       getters: true,
//     },
//     id: false,
//   }
// );

// // get total count of reactions
// PostSchema.virtual("replyCount").get(function () {
//   return this.reply.length;
// });

// // create the Thoughts model using the Thoughts Schema
// const Post = model("Post", PostSchema);

// module.exports = Post;
