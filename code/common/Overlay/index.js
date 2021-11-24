import React from 'react'

function Overlay({id ='', src}) {
    return (
        src ? <img src = {src} className='home-overlay' id = {id} /> : null
    )
}

export default Overlay
