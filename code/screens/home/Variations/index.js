import React from 'react'
import { images, animations } from '../../../../assets/js/consts/index'
import { Frame, Spinner, Video } from '../../../common'


function Variations() {
    return (
        <div className="section variations" id="section3" data-anchor="3d-variations">
            <div className='container'>
    
                <h3 className={`${animations.slideInUp} container-title hidden-block`}><strong>Lorem ipsum </strong> dolor ut elit amet, consectetur sit</h3>
                <h5 className={`${animations.fadeIn} container-subtitle hidden-block`}><strong>Lorem ipsum</strong> dolor sit amet, consectetur adipiscing elit ut lorem, purus sit <strong>amet luctus</strong> venenatis</h5>
                <div className='variations-flex'>

                    <div className='variations-ape'>
                        <img src={images.variations.globe} className={`${animations.slideInLeft} variations-globe`} />
                        <Frame>
                            <img src={images.variations.arrow} className={`${animations.bounceIn} variations-ape-arrow`} />
                            <Spinner id='variations-ape-loader' />
                            <div
                                style={{ width: 320, height: 410, opacity: 0 }}
                                id="gameContainer"
                                className="ape-figure"
                            ></div>
                        </Frame>
                    </div>
                    <div className='variations-video'>
                        <img src={images.variations.videoShape} className='variations-video-overlay' />
                        <div className='variations-video-container'>
                            <img src = {images.variations.circle} className='variations-video-container-circle' />
                            <Video id='variations-video' />
                        </div>
                    </div>
                </div>

            </div>
        </div>

    )
}

export default Variations
