import React from 'react'
import { images } from '../../../assets/js/consts/images'

function Popup({children, id='', className ='', withBlur, generateLink}) {
    return (
        <div className={`popup ${className}`} id = {id}>
            <div className='popup-overlay'></div>
            <div className='popup-content'>
                {withBlur && <div className='popup-blur'></div>}
                <button className='popup-content-close' > 
                    <img src = {generateLink(images.close)}  />
                </button>
                {children}</div>
        </div>
    )
}

export default Popup
