import { useState } from "react"

export default function VideoPage({ video, onHideComments }) {
  const [upvotes, setUpvotes] = useState(video.upvotes)
  const [downvotes, setDownvotes] = useState(video.downvotes)

  function handleHideComments() {
    onHideComments()
  }
  
  return (
    <div>
      <iframe
      width="919"
      height="525"
      src={null}
      frameBorder="0"
      allowFullScreen
      title="Thinking in React"
      />
      <h2>{video.title}</h2>
      <button onClick={() => setUpvotes(upvotes + 1)}>{upvotes} 👍</button>
      <button onClick={() => setDownvotes(downvotes + 1)}>{downvotes} 👎</button>
      <br/>
      <button onClick={handleHideComments}>Hide Comments</button>
    </div>
  )
}