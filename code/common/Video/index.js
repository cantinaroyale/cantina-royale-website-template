import React from "react";

function Video({ id = "", className='' }) {
  return (
    <video muted loop id={id} playsInline preload="auto" className = {className}>
      Your browser does not support HTML5 video.
    </video>
  );
}

export default Video;
