import React from 'react'
import video from "../assets/backgroundvideo.mp4"

function background() {
  return (
    <div className = 'background'>
      <video src = {video} autoplay loop muted />
      </div>




  
  )
}

export default background