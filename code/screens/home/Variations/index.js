import React from 'react'
import { images, animations } from '../../../../assets/js/consts/index'
import { Frame, Spinner } from '../../../common'


function Variations() {
    return (
        <div className="section variations" id="section3" data-anchor="3d-variations">
            <div className='container'>
                <div className={`${animations.fadeIn} variations-overlay hidden-flex`}>
                    <div className='variations-overlay-center'>
                        <div className='variations-overlay-center-content'></div>
                    </div>
                </div>
                <h3 className={`${animations.slideInUp} container-title hidden-block`}><strong>Lorem ipsum </strong> dolor ut elit amet, consectetur sit</h3>
                <h5 className={`${animations.fadeIn} container-subtitle hidden-block`}><strong>Lorem ipsum</strong> dolor sit amet, consectetur adipiscing elit ut lorem, purus sit <strong>amet luctus</strong> venenatis</h5>
                <div className='variations-flex'>
                    <img src={images.variations.globe} className={`${animations.slideInLeft} variations-globe`} />
                    <Frame>
                        <Spinner id='variations-ape-loader' />
                        <div
                            style={{ width: 320, height: 410, opacity:0 }}
                            id="gameContainer"
                            className="ape-figure"

                        ></div>
                    </Frame>
                </div>

            </div>
        </div>

    )
}

export default Variations
