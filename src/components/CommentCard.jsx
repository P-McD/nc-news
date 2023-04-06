import React from 'react'
import "../css/CommentCard.css"

export default function CommentCard({comment}) {
  return (
    <div className="comment-card"> 
      <p className="comment-author"
      >{comment.author}</p>
      <p>{comment.body}</p>
      <section id="comment-info">
        <p>Posted at {comment.created_at}</p>
        {/* <button>Votes: {comment.votes}</button> */}
      </section>
    </div>
  )
}
