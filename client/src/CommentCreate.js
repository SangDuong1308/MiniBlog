import { useState } from "react";
import React from "react";
import axios from "axios";

const CommentCreate = ({ postId }) => {
  const [comment, setComment] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    await axios.post(`http://localhost:4001/posts/${postId}/comments`, {
      comment,
    });
    setComment("");
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label>New comment</label>
          <input
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            className="form-control mt-2"
          />
        </div>
        <button className="mt-3 btn btn-primary">Submit</button>
      </form>
    </div>
  );
};

export default CommentCreate;
