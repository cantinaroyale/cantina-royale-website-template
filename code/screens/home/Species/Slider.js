import React from 'react'
import { animations, species } from '../../../../assets/js/consts'
import { Frame } from '../../../common'


function Slider() {
    return (
        <div class={`${animations.zoomIn} swiper species-slider animate__delay-2s base-delay`}>
        <div class="swiper-wrapper">
            {species.map((m, index) => {
                return <div class="swiper-slide" key={index}>
                    <Frame>
                        <div className='species-slider-element'>
                            <section className='species-slider-element-globe'>
                            <img src = {m.globe}   />
                            <aside />
                            </section>

                            <img src={m.image} className='species-slider-element-avatar' />
                            <figure className='species-slider-element-text'>
                                <section className='species-slider-element-text-overlay'></section>
                                <p>{m.text}</p>
                            </figure>
                        </div>
                    </Frame>

                </div>
            })}

        </div>
      
    </div>
    )
}

export default Slider
