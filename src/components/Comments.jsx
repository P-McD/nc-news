import React from "react";
import { useParams, Link } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import { commentsHandler, postCommentHandler } from "../api";
import CommentCard from "./CommentCard";
import { UserContext } from "../contexts/UserContext";

function Comments() {
  const { user } = useContext(UserContext);
  const { article_id } = useParams();
  const [comments, setComments] = useState([]);
  const [notSignedIn, setNotSignedIn] = useState(false);
  const [commentError, setCommentError] = useState(false);
  const [inputComment, setInputComment] = useState("");
  useEffect(() => {
    commentsHandler(article_id).then((data) => {
      setComments(data);
    });
  }, [setComments]);
  const typeComment = (event) => {
    setCommentError(false);
    setInputComment(event.target.value)
    console.log(inputComment);
  };
  const submitComment = (event) => {
    event.preventDefault();
    if (!user.username) {
      setNotSignedIn(true);
    } else if (inputComment.length < 2) {
      setCommentError(true);
    } else {
      postCommentHandler({ article_id, user, inputComment}).then((returnedComment) => {
        return setComments((currentComments) => {
          return [returnedComment, ...currentComments]
        })
      })
    }
  };
  // if (comments.length === 0) {
  //   return (
  //     <div className="no-comments">
  //       <h4>Comments</h4>
  //       <p>Be the first to comment!</p>
  //     </div>
  //   );
  // } else {
  return (
    <div className="comments">
      <h4>Comments</h4>
      <form id="post-comment">
        <label htmlFor="comment-box">Join the Conversation</label>
        <br />
        <textarea id="comment-box" onChange={typeComment}></textarea>
        <br />
        <button id="submit-comment" onClick={submitComment}>
          Post Comment
        </button>
        <span id="comment-signin" className="error-box">
          {notSignedIn ? (
            <p>
              You must be signed in to post a comment.
              <Link to="/signin">Sign In</Link>
            </p>
          ) : null}
        </span>
        <span id="comment-length-error" className="error-box">
          {commentError ? (
            <p>Comments must contain at least 2 characters. Please try again</p>
          ) : null}
        </span>
      </form>
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

export default Comments;
