import VideoController from '../videoController/index.js'
let video




const initVideo = () => {
    let videoSrc;
    if (window.innerWidth <= 600) {
        videoSrc = "/assets/videos/mobile/video-low-quality.m3u8";
    } else {
        videoSrc = "/assets/videos/desktop/video.m3u8";
    }
    video = new VideoController('pvp-video', videoSrc)
    addEventsToVideoPreview()
    addEventsToOverlay()
    addEventsToCloseBtn()
};


const addEventsToOverlay = () => {
    const overlay = document.querySelector('#pvp-popup .popup-overlay')
    overlay.addEventListener('click', () => {
        toggleVideoPopup(false)
        video.stop()
    })
}

const addEventsToCloseBtn = () => {
    const btn = document.querySelector('#pvp-popup .popup-content-close')
    btn.addEventListener('click', () => {
        toggleVideoPopup(false)
        video.stop()
    })
}

const addEventsToVideoPreview = () => {
    const popup = document.querySelector('#pvp-popup')
    const container = document.querySelector('#pvp-bottom-frame')
    container.addEventListener('click', () => {
        container.style.opacity = 0
        popup.style.opacity = 1
        popup.style.pointerEvents = 'all'
        video.play()
    })
}

const toggleVideoPopup = (show) => {
    const popup = document.querySelector('#pvp-popup')
    const container = document.querySelector('#pvp-bottom-frame')
    container.style.opacity = show ? 0 : 1
    popup.style.opacity = show  ? 1 : 0
    popup.style.pointerEvents = show ? 'all' : 'none' 
}



const stopVideo = () => {
    if(video){
        video.stop()
    }
    toggleVideoPopup(false)
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