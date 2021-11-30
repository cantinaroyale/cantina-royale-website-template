import React from 'react'
import {images} from '../../../assets/js/consts/index'
import { handleUrl } from '../../utils'
function AppLoader({_relativeURL, _ID}) {
    return (
        <div className='app-loader'>
            <img src = {handleUrl(images.appLoaderOverlay, _relativeURL, _ID)} className  = 'app-loader-overlay' />
            <img src = {handleUrl(images.appLoaderBg,  _relativeURL, _ID)} className  = 'app-loader-bg' />
            <img src = {handleUrl(images.appLoader, _relativeURL, _ID)} className  = 'app-loader-img' />
        </div>
    )
}

export default AppLoader
