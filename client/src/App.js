import React from "react";
import PostCreate from "./PostCreate";
import PostList from "./PostList";

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  return (
    <div className="container">
      <h1>Create Post</h1>
      <PostCreate />
      <hr />
      <h1 style={{ marginBottom: "20px" }}>Posts</h1>
      <PostList />
    </div>
  );
};
