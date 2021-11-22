import React from "react";

function Video({ id = "" }) {
  return (
    <video muted loop id={id} playsInline preload="auto">
      Your browser does not support HTML5 video.
    </video>
  );
}

export default Video;
