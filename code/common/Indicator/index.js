import React from 'react'
import { animations, images, sections } from '../../../assets/js/consts'


const Figure = () => {
  return <figure className="indicator-section-figure">
    <div className="indicator-section-figure-small"></div>
    <div className="indicator-section-figure-medium"></div>
    <div className="indicator-section-figure-big"></div>
  </figure>
}

function Indicator() {
  return (
    <div className={`${animations.fadeInDown} indicator`}>
      <img src={images.line} className='indicator-line' />
      {
        sections.map((section, index) => {
          return <section  id = {index === 0 ? 'selected-section' : ''} className="indicator-section"  data-link={section.link} key={index} data-index={index + 1}>
            <button className='indicator-section-btn'>{section.name}</button>
            <Figure />
          </section>

        })}
    </div>
  )
}

export default Indicator
