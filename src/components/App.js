import { useState } from "react";
import video from "../data/video.js";
import VideoPage from "./VideoPage.js";
import CommentsPage from "./CommentsPage.js";

function App() {
  const [hideComments, setHideComments] = useState(false)

  function handleHideComments(){
    setHideComments(hideComments => !hideComments)
  }

  return (
    <div className="App">
      <VideoPage video={video} onHideComments={handleHideComments}/>
       {hideComments ? null : <CommentsPage comments={video.comments} /> }
    </div>
  );
}

export default App;
