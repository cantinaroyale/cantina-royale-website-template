import React from "react";
import { images } from "../../../../assets/js/consts";
import { Scroller } from "../../../common";

function Main({generateLink}) {
  return (
    <div className="section main" id="section0" data-anchor="game-play-video">

      <div className="container hidden-flex"> 
        <Scroller />
      </div>
    </div>
  );
}

export default Main;
