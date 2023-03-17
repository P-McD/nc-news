import React from "react";
import { useState } from "react";
import { upVoteHandler } from "../api";

export default function Votes({ singleArticle }) {
  const articleId = singleArticle.article_id;
  const [votes, setVotes] = useState(singleArticle.votes);
  const [error, setError] = useState(null);
  const [voteDisabled, setVoteDisabled] = useState(false);
  const [voteValue, setVoteValue] = useState(0)

  const upVote = (event) => {
    event.preventDefault();
    // console.log(votes, "fe votes before inc");
    
    if (voteDisabled === false) {
      setVoteValue(1)
    } else {
      setVoteValue(-1)
    }
    setVotes((currentVotes) => currentVotes + voteValue);
    // console.log(votes, "<<fe votes after inc");
   
    setError(null);
    upVoteHandler({articleId, voteValue}).catch((err) => {
      setVotes((currentVotes) => currentVotes - voteValue);
      setError(
        "Something went wrong, please check your connection and try again :)"
      );
    })
     setVoteDisabled(!voteDisabled)
  };
  return (
    <div>
      <button id="upvote-button" onClick={upVote}>
        Votes: {votes}
      </button>
      {error ? <p>{error}</p> : null}
    </div>
  );
}
