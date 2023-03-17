import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { commentsHandler } from "../api";
import CommentCard from "./CommentCard";

function Comments() {
  const { article_id } = useParams();
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    commentsHandler(article_id).then((data) => {
      setComments(data);
      setLoading(false)
    });
  }, [article_id]);
  if (loading) {
    return <p>Loading comments...</p>
  }
  else if (comments.length === 0) {
    return (
      <div className="no-comments">
        <h4>Comments</h4>
        <p>Be the first to comment!</p>
      </div>
    );
  } else {
    return (
      <div className="comments">
        <h4>Comments</h4>
        <ul>
          {comments.map((comment) => {
            return (
              <li key={comment.comment_id} className="comment-card">
                <CommentCard comment={comment} />
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
export default Comments;
