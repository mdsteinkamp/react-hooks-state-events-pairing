import { createPortal } from "react-dom"

export default function CommentsPage({ comments }) {
  console.log(comments)
  const commentsList = comments.map(comment => (
    <>
    <h3>{comment.user}</h3>
    <p>{comment.comment}</p>
    </>
  ))

  return (
    <>
    <h2>{comments.length} Comments</h2>
    <div>{commentsList}</div>
    </>
  )
}