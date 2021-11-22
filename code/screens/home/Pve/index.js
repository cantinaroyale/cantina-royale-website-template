import React from 'react'
import { animations, images } from '../../../../assets/js/consts/index'
import { Frame, Video } from '../../../common'
import Popup from '../../../common/Popup'
function Pve() {
    return (
        <div className="section pve" id="section4" data-anchor="pve">
             <Popup id='pve-popup' className='video-popup'>
                <Frame id='pve-popup-frame'>
                <Video id='pve-video' />
                </Frame>
                </Popup>
            <div className='container hidden-flex'>
                <h3 className={`${animations.slideInUp} container-title`}><strong>Lorem ipsum </strong> dolor ut elit amet, consectetur sit</h3>
                <h5 className={`${animations.fadeIn} container-subtitle`}><strong>Lorem ipsum</strong> dolor sit amet, consectetur adipiscing elit ut lorem, purus sit <strong>amet luctus</strong> venenatis</h5>
                <div className='pve-bottom-flex'>
                <div className='bottom-text pve-bottom-text'>
                    <p className='gradiant-text'>Lorem ipsum dolor sit amet,</p>
                    <p className='gradiant-text'>consectetur adipiscing elit ut lorem,</p>
                    <p className='gradiant-text'>purus sit amet luctus venenatis</p>
                </div>
               
                <Frame id ='pve-bottom-frame' className='video-preview'>
                   <img src = {images.pve.videoPreview} className='video-preview-img' />
                   <img src = {images.play} className='play' />
                </Frame>
                </div>

            </div>
        </div>

    )
}

export default Pve
