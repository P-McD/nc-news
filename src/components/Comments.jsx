import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { commentsHandler } from "../api";
import CommentCard from "./CommentCard";


function Comments() {
  const { article_id } = useParams();
  const [comments, setComments] = useState([])
  useEffect(() => {
    commentsHandler(article_id).then((data) => {
        setComments(data)
    }
    )
  });
  return <div className="comments">
    <h4>Comments</h4>
    <ul >
        {comments.map((comment) => {
            return <li key={comment.comment_id} className="comment-card">
                <CommentCard comment={comment} />
            </li>
        })}
    </ul>
  </div>;
}

export default Comments;