import React from "react";
import { animations } from "../../../../assets/js/consts";
import { Scroller, Video } from "../../../common";

function Main() {
  return (
    <div className="section main" id="section0" data-anchor="game-play-video">
      <div className={`container hidden-flex`}>
       
        <div className={`${animations.bounceInRight} main-bottom-text bottom-text`}>
          <p className='gradiant-text'>Lorem ipsum dolor sit amet,</p>
          <p className='gradiant-text'>consectetur adipiscing elit ut lorem,</p>
          <p className='gradiant-text'>purus sit amet luctus venenatis</p>
        </div>
        <Video id="main-video" />
        <Scroller />
      </div>
    </div>
  );
}

export default Main;
