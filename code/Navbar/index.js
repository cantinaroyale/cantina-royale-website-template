import React from 'react'
import { animations, images } from '../../assets/js/consts'

function Navbar() {
    return (
        <nav className='navbar'>
            <div className = 'navbar-flex'>
            <div className={`${animations.fadeInLeft} navbar-left animate__delay-0s`}>
                <div className='navbar-hamburger'>
                    <section></section>
                    <section></section>
                    <section></section>
                </div>
                <a href='/' className='navbar-logo'><img src={images.navbar.logo} alt='logo' /></a>
            </div>
            <img  src={images.navbar.comingSoon} className={`${animations.fadeInRight} navbar-coming-soon animate__delay-0s`} />
            </div>
        </nav>
    )
}

export default Navbar
