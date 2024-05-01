import axios from "axios";
import React, { useEffect, useState } from "react";

const CommentList = ({ postId }) => {
  const [comments, setComments] = useState([]);

  const fetchComments = async () => {
    const res = await axios.get(
      `http://localhost:4001/posts/${postId}/comments`
    );
    setComments(res.data);
  };

  useEffect(() => {
    fetchComments();
  }, []);

  const renderedComments = Object.values(comments).map((comment) => {
    return (
      <li
        key={comment.commentId}
        className="list-group-item list-group-item-primary"
      >
        {comment.content}
      </li>
    );
  });

  return <ul className="list-group mb-2 mt-2">{renderedComments}</ul>;
};

export default CommentList;
