import React from "react";

function Video({ id = "", className='', poster ='' }) {
  return (
    <video muted loop id={id} playsInline preload="auto" className = {className} poster = {poster}>
      Your browser does not support HTML5 video.
    </video>
  );
}

export default Video;
