import React from 'react'
import { animations } from '../../../../assets/js/consts'
import Slider from './Slider'
import {Circles} from '../../../common'

function Species({generateLink}) {
    return (
        <div className="section species" id="section2" data-anchor="species">
             
            <div className='container hidden-flex'>
            <Circles  generateLink = {generateLink}/>
                <h3 className={`${animations.bounceInDown} container-title`} >
                    <strong>Lorem ipsum</strong> dolor ut elit amet, consectetur sit
                </h3>
                <h5 className={`${animations.fadeInDown} container-subtitle`}>
                    <strong>Lorem ipsum</strong> dolor sit amet, consectetur adipiscing elit ut lorem, purus sit <strong>amet luctus</strong> venenatis
                </h5>
                <Slider generateLink = {generateLink} />
                <h6  className={`${animations.slideInUp} species-bottom-text`}><strong>Lorem ipsum</strong> dolor sit amet, consectetur adipiscing elit ut lorem, purus sit <strong>amet luctus</strong> venenatis</h6>
            </div>
        </div>
    )
}

export default Species
