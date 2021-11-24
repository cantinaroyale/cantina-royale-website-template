import VideoController from '../videoController/index.js'
import uiUtil from '../utils/ui.js'
let video




const initVideo = () => {
    let videoSrc;
    if (window.innerWidth <= 600) {
        videoSrc = "/assets/videos/mobile/video-low-quality.m3u8";
    } else {
        videoSrc = "/assets/videos/desktop/video.m3u8";
    }
    video = new VideoController('pvp-video', videoSrc)
    const overlay = document.querySelector('#pvp-popup .popup-overlay')
    const closeBtn = document.querySelector('#pvp-popup .popup-content-close')
    const popup = document.querySelector('#pvp-popup')
    const container = document.querySelector('#pvp-bottom-frame')
    uiUtil.addEventsToPopup(popup, overlay, closeBtn, video)
    uiUtil.addEventsToVideoPreview(popup, container, video)
};



const stopVideo = () => {
    if(video){
        video.stop()
    }
    const popup = document.querySelector('#pvp-popup')
    uiUtil.togglePopup(popup, false)
}


const onPageInView = async () => {
    if(!video){
     initVideo() 
    }
}


const pvpPage = {
    onPageInView,
    stopVideo
}

export default pvpPage