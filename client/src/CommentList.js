// import axios from "axios";
import React from "react";
// import { useEffect, useState } from "react";

const CommentList = ({ comments }) => {
  // const [comments, setComments] = useState([]);

  // const fetchComments = async () => {
  //   const res = await axios.get(
  //     `http://localhost:4001/posts/${postId}/comments`
  //   );
  //   setComments(res.data);
  // };

  // useEffect(() => {
  //   fetchComments();
  // }, []);

  const renderedComments = Object.values(comments).map((comment) => {
    let content;

    if (comment.status === "approved") {
      content = comment.content;
    }
    if (comment.status === "pending") {
      content = "This comment is awaiting moderation";
    }
    if (comment.status === "rejected") {
      content = "This comment has been rejected";
    }

    return (
      <li
        key={comment.commentId}
        className="list-group-item list-group-item-primary"
      >
        {content}
      </li>
    );
  });

  return <ul className="list-group mb-2 mt-2">{renderedComments}</ul>;
};

export default CommentList;
