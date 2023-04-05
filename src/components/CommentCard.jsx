import React from 'react'

export default function CommentCard({comment}) {
  return (
    <div> 
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
