import React from "react";
import { animations , images} from "../../../../assets/js/consts";
import {Circles} from '../../../common'

function Cantina({ generateLink }) {
  return (
    <div className="section cantina" id="section1" data-anchor="cantina-metaverse">

      <div className = 'container hidden-flex'>
      <Circles generateLink = {generateLink} />
      <h2 className="container-title">
       <strong> Lorem ipsum</strong> dolor ut elit <br /> amet, consectetur sit
      </h2>
      <div
        className={`${animations.bounceIn} bottom-text`}
      >
        <p className='gradiant-text'>Lorem ipsum dolor sit amet,</p>
        <p className='gradiant-text'>consectetur adipiscing elit ut lorem,</p>
        <p className='gradiant-text'>purus sit amet luctus venenatis</p>
      </div>
      </div>
    </div>
  );
}

export default Cantina;
