import React from 'react'
import { images } from '../../assets/js/consts'

function Navbar() {
    return (
        <nav className='navbar'>
            <div className='navbar-left'>
                <div className='navbar-hamburger'>
                    <section></section>
                    <section></section>
                    <section></section>
                </div>
                <a href='/' className='navbar-logo'><img src={images.navbar.logo} alt='logo' /></a>
            </div>
            <img src={images.navbar.comingSoon} className='navbar-coming-soon' />
        </nav>
    )
}

export default Navbar
