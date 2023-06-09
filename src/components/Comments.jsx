import React from "react";
import { useParams, Link } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import { commentsHandler, postCommentHandler } from "../api";
import CommentCard from "./CommentCard";
import { UserContext } from "../contexts/UserContext";
import "../css/Comments.css";
import Loading from "./Loading";

function Comments() {
  const { user } = useContext(UserContext);
  const { article_id } = useParams();
  const [comments, setComments] = useState([]);
  const [notSignedIn, setNotSignedIn] = useState(false);
  const [commentError, setCommentError] = useState(false);
  const [inputComment, setInputComment] = useState("");
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    commentsHandler(article_id).then((data) => {
      setComments(data);
      setLoading(false);
    });
  }, [article_id]);
  const typeComment = (event) => {
    setCommentError(false);
    setInputComment(event.target.value);
    console.log(inputComment);
  };

  const submitComment = (event) => {
    if (!user.username) {
      setNotSignedIn(true);
    } else if (inputComment.length < 2) {
      setCommentError(true);
    } else {
      setButtonDisabled(true);
      postCommentHandler({ article_id, user, inputComment }).then(
        (returnedComment) => {
          setButtonDisabled(false);
          setInputComment("");
          setComments((currentComments) => {
            return [returnedComment, ...currentComments];
          });
        }
      );
    }
  };
  if (loading) {
    return <Loading />;
  } else {
    return (
      <div className="comments">
        <h3>Comments</h3>
        <form id="post-comment">
          <label htmlFor="comment-box">Join the Conversation!</label>
          <br />
          <textarea
            id="comment-box"
            onChange={typeComment}
            value={inputComment}
          ></textarea>
          <br />
          <button
            id="submit-comment"
            onClick={(event) => {
              event.preventDefault();
              submitComment();
            }}
            disabled={buttonDisabled}
          >
            {buttonDisabled ? "Please Wait..." : "Post a Comment"}
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
              <p>
                Comments must contain at least 2 characters. Please try again
              </p>
            ) : null}
          </span>
        </form>
        {comments.length === 0 ? (
          <div className="no-comments">
            <h4>Comments</h4>
            <p>Be the first to comment!</p>
          </div>
        ) : (
          <ul>
            {comments.map((comment) => {
              return (
                <li key={comment.comment_id}>
                  <CommentCard comment={comment} />
                </li>
              );
            })}
          </ul>
        )}
      </div>
    );
  }
}

export default Comments;
