import { useMutation } from "@apollo/client";
import { ADD_COMMENT } from "../../utils/mutations";
import { useState } from "react";
import Spotify from "../Spotify";

const PostCard = ({ post }) => {
  const [comment, setComment] = useState("");
  const [addComment, { loading }] = useMutation(ADD_COMMENT);

  const handleSubmit = (e) => {
    e.preventDefault();

    addComment({
      postId: post._id,
      commentText: comment,
    });
  };

  //use tailwind to display the post and the comments, as well as an input field to add a new comment
  return (
    <section className="max-w-sm rounded overflow-hidden shadow-lg border border-solid border-black my-2">
      
      
      <h4 className="text-gray-500 text-xl">
        <span className="text-gray-900 text-sm">Username: </span>
        {post.username}
        <p className="text-gray-300 text-sm">at: {post.createdAt} </p>
      </h4>
      <Spotify link={post.postText} />
      <main>{post.postText}</main>
      <aside>
        <h5 className="text-gray-500 text-xl">Comments:</h5>
        {post.comments.map((comment) => (
          <p className="text-gray-300 text-sm">
            <span className="text-gray-300 text-sm">username: </span>
            {comment.username}
            <p className="text-gray-300 text-sm">at: {comment.createdAt} </p>
            <p className="text-gray-300 text-sm">
              comment: {comment.commentText}
            </p>
          </p>
        ))}
      </aside>
      <form className="flex flex-col" onSubmit={handleSubmit}>
        <input
          className="form-input w-100 w-full p-3 rounded-full border border-solid border-black"
          type="text"
          placeholder="Add a comment"
        />
        <button
          disabled={loading}
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          type="submit"
          className="py-3 w-full ml-auto px-3 rounded-full text-center transition bg-gradient-to-b from-yellow-200 to-green-500 hover:to-green-800 active:from-green-400 focus:from-red-400 md:px-1"
        >
          Add Comment
        </button>
      </form>


    </section>
  );
};

export default PostCard;
