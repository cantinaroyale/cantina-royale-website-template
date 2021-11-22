import React from 'react'
import { images } from '../../../assets/js/consts/images'

function Popup({children, id='', className =''}) {
    return (
        <div className={`popup ${className}`} id = {id}>
            <div className='popup-overlay'></div>
            <div className='popup-content'>
                <button className='popup-content-close' > 
                    <img src = {images.close}  />
                </button>
                {children}</div>
        </div>
    )
}

export default Popup
