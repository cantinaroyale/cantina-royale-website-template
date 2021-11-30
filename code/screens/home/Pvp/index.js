import React from 'react'
import { animations, images } from '../../../../assets/js/consts/index'
import { Frame, Video } from '../../../common'
import Popup from '../../../common/Popup'
function Pvp({generateLink}) {
    return (
        <div className="section pvp" id="section5" data-anchor="pvp">
             <Popup id='pvp-popup' className='video-popup' generateLink = {generateLink}>
                <Frame id='pvp-popup-frame'>
                <Video id='pvp-video' />
                </Frame>
                </Popup>
            <div className='container hidden-flex'>
                <h3 className={`${animations.slideInUp} container-title`}><strong>Lorem ipsum </strong> dolor ut elit amet, consectetur sit</h3>
                <h5 className={`${animations.fadeIn} container-subtitle`}><strong>Lorem ipsum</strong> dolor sit amet, consectetur adipiscing elit ut lorem, purus sit <strong>amet luctus</strong> venenatis</h5>
                <div className='page-bottom-flex'>
                <div className={`${animations.fadeInUp} bottom-text pvp-bottom-text`}>
                    <p className='gradiant-text'>Lorem ipsum dolor sit amet,</p>
                    <p className='gradiant-text'>consectetur adipiscing elit ut lorem,</p>
                    <p className='gradiant-text'>purus sit amet luctus venenatis</p>
                </div>
               
                <Frame id ='pvp-bottom-frame' className={`${animations.fadeInUp} video-preview`}>
                   <img src = {generateLink(images.pvp.videoPreview)} className='video-preview-img' />
                   <img src = {generateLink(images.play)} className='play' />
                </Frame>
                </div>

            </div>
        </div>

    )
}

export default Pvp
