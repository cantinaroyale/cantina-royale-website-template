import React from "react";
import { animations, images } from "../../../../assets/js/consts";
import Container from "./Container";


function Apes({ generateLink }) {

    return (
        <div className="section apes" id="section7" data-anchor="apes">
            <div className='container'>
                <h2 className="container-title">
                    <strong> Lorem ipsum</strong> dolor ut elit  amet, consectetur sit
                </h2>
                <h5 className={`${animations.fadeIn} container-subtitle`}><strong>Lorem ipsum</strong> dolor sit amet, consectetur adipiscing elit ut lorem, purus sit <strong>amet luctus</strong> venenatis</h5>

                <div className='apes-flex'>
                    <Container coinsImg={generateLink(images.apes.coins)} smallApe={generateLink(images.apes.ape1)} id='ape-first-container'
                    />
                    <Container coinsImg={generateLink(images.apes.coins)} smallApe={generateLink(images.apes.ape2)} id='ape-second-container' />
                </div>
            </div>
        </div>
    );
}

export default Apes;
