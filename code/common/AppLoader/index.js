import React from 'react'
import {images} from '../../../assets/js/consts/index'
function AppLoader() {
    return (
        <div className='app-loader'>
            <img src = {images.appLoaderOverlay} className  = 'app-loader-overlay' />
            <img src = {images.appLoaderBg} className  = 'app-loader-bg' />
            <img src = {images.appLoader} className  = 'app-loader-img' />
        </div>
    )
}

export default AppLoader
