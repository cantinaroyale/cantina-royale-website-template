import React from 'react'
import { animations, images } from '../../../../assets/js/consts/index'
import { Frame } from '../../../common'


function Scholarships({generateLink}) {
    return (
        <div className="section scholarships" id="section6" data-anchor="scholarships">
            <div className='container hidden-flex'>
                <h3 className={`${animations.slideInUp} container-title`}><strong>Lorem ipsum </strong> dolor ut elit amet, consectetur sit</h3>
                <h5 className={`${animations.fadeIn} container-subtitle`}><strong>Lorem ipsum</strong> dolor sit amet, consectetur adipiscing elit ut lorem, purus sit <strong>amet luctus</strong> venenatis</h5>
                <div className='page-bottom-flex'>
                    <div className = {`${animations.fadeInLeft} bottom-text pvp-bottom-text animate__delay-2s base-delay`}>
                        <p className='gradiant-text'>Lorem ipsum dolor sit amet,</p>
                        <p className='gradiant-text'>consectetur adipiscing elit ut lorem,</p>
                        <p className='gradiant-text'>purus sit amet luctus venenatis</p>
                    </div>

                    <Frame id='scholarships-frame'  className={`${animations.fadeInRight} animate__delay-2s base-delay`}>
                        <a href='/' className='scholarships-medium'>
                            <p>Medium Post Title</p>
                        </a>
                    </Frame>
                </div>

            </div>
        </div>

    )
}

export default Scholarships
