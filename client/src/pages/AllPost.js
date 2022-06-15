import React, { useState } from "react";
import { useQuery } from "@apollo/client";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";

import { ADD_POST } from "../utils/mutations";
import { QUERY_ALL_POSTS, QUERY_ME } from "../utils/queries";
import Auth from "../utils/auth.js";
import PostCard from "../components/PostCard";

const AllPost = () => {
  const [postText, setpostText] = useState("");

  const [characterCount, setCharacterCount] = useState(0);

  const [addPost, { error }] = useMutation(ADD_POST, {
    update(cache, { data: { addPost } }) {
      try {
        const allPostsCacheRead = cache.readQuery({ query: QUERY_ALL_POSTS });

        const { getAllPosts } = allPostsCacheRead;

        cache.writeQuery({
          query: QUERY_ALL_POSTS,
          data: { getAllPosts: [addPost, ...getAllPosts] },
        });
      } catch (e) {
        console.error(e);
      }

      // // update me object's cache
      // const meCacheRead = cache.readQuery({ query: QUERY_ME });

      // const { me } = meCacheRead;
      // cache.writeQuery({
      //   query: QUERY_ME,
      //   data: { me: { ...me, posts: [...me.posts, addPost] } },
      // });
    },
  });

  const { data, loading } = useQuery(QUERY_ALL_POSTS);

  console.log("data", data);

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await addPost({
        variables: {
          postText,
        },
      });

      setpostText("");
    } catch (err) {
      console.error(err);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    if (name === "postText" && value.length <= 280) {
      setpostText(value);
      setCharacterCount(value.length);
    }
  };

  return (
    <div>
      {Auth.loggedIn() ? (
        <>
          <p
            className={`m-0 ${
              characterCount === 280 || error ? "text-danger" : ""
            }`}
          >
            Character Count: {characterCount}/280
          </p>
          <form
            className="flex-row justify-center justify-space-between-md align-center"
            onSubmit={handleFormSubmit}
          >
            <div className="col-12 col-lg-9">
              <textarea
                name="postText"
                placeholder="Here's a new post..."
                value={postText}
                className="form-input w-100"
                style={{ lineHeight: "1.5", resize: "vertical" }}
                onChange={handleChange}
              ></textarea>
            </div>

            <div className="col-12 col-lg-3">
              <button className="btn btn-primary btn-block py-3" type="submit">
                Add POST
              </button>
            </div>
            {error && (
              <div className="col-12 my-3 bg-danger text-white p-3">
                {error.message}
              </div>
            )}
          </form>
        </>
      ) : (
        <p>
          Please login <Link to="/login">login</Link> or{" "}
          <Link to="/signup">signup.</Link>
        </p>
      )}
      {data && data.getAllPosts.map((post) => <PostCard post={post} />)}
    </div>
  );
};

export default AllPost;
