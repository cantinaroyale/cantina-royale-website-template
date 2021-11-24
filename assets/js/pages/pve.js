import { delay } from "../utils/index.js"
import uiUtil from "../utils/ui.js";
import VideoController from '../videoController/index.js'
let video




const initVideo = () => {
    let videoSrc;
    if (window.innerWidth <= 600) {
        videoSrc = "/assets/videos/mobile/video-low-quality.m3u8";
    } else {
        videoSrc = "/assets/videos/desktop/video.m3u8";
    }
    video = new VideoController('pve-video', videoSrc)
    const overlay = document.querySelector('#pve-popup .popup-overlay')
    const closeBtn = document.querySelector('#pve-popup .popup-content-close')
    const popup = document.querySelector('#pve-popup')
    const container = document.querySelector('#pve-bottom-frame')
    uiUtil.addEventsToPopup(popup, overlay, closeBtn, video)
    uiUtil.addEventsToVideoPreview(popup, container, video)
};



const stopVideo = () => {
    if(video){
        video.stop()
    }
    const popup = document.querySelector('#pve-popup')
    uiUtil.togglePopup(popup, false)
}


const onPageInView = async () => {
    if(!video){
     initVideo() 
    }
}


const pvePage = {
    onPageInView,
    stopVideo
}

export default pvePage