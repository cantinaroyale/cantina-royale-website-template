import React from 'react'
import { animations, partners, community } from '../../../../assets/js/consts/index'


function Partners({generateLink}) {
    return (
        <div className="section partners" id="section8" data-anchor="partners">

            <div className='container hidden-flex'>
                <h3 className={`${animations.slideInUp} container-title`}>Partners and Backers</h3>
                <ul className='partners-list'>
                    {partners.map((partner, index) => {
                        return <li className='partners-list-item' key={index}>
                            <img src={generateLink(partner.image)} />
                        </li>
                    })}
                </ul>
                <div className='partners-community'>
                    <h3 className = 'partners-community-title'>Community</h3>
                    <ul className='partners-community-list'>{
                        community.map((elem, index) => {
                            return <li key = {index} className='partners-community-list-item'>
                                <a href={elem.url} target='_blank'><img src={generateLink(elem.image)} /></a>
                            </li>
                        })
                    }</ul>
                </div>

            </div>
        </div>

    )
}

export default Partners
