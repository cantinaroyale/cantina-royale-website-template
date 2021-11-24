import React from "react";
import {animations} from '../../../assets/js/consts'
function Scroller() {
  return (
    <div className={`${animations.slideInUp} scroller`}>
      <figure></figure>
    </div>
  );
}

export default Scroller;
