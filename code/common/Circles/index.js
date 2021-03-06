import React from 'react'
import { animations, images } from '../../../assets/js/consts'

function Circles({generateLink}) {
    return (
        <div className='circles'>
                <img  className = {`${animations.fadeInLeft} animate__delay-0.7s circles-circle-1`} src = {generateLink(images.shared.curve1)} />
                <img  className = {`${animations.fadeInLeft} animate__delay-0.7s circles-circle-2`} src = {generateLink(images.shared.curve2)} />
                <img  className = {`${animations.fadeInLeft} animate__delay-0.7s  circles-circle-3`} src = {generateLink(images.shared.curve3)} />
        </div>
    )
}

export default Circles
