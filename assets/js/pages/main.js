import { delay } from "../utils/index.js"
import VideoController from '../videoController/index.js'
let video




const initVideo = () => {
    let mainVideoUrl;
    if (window.innerWidth <= 600) {
        mainVideoUrl = "/assets/videos/mobile/video-low-quality.m3u8";
    } else {
        mainVideoUrl = "/assets/videos/desktop/video.m3u8";
    }
    video = new VideoController('main-video', mainVideoUrl)
    //  video.play()
};

const stopVideo = () => {
    video.stop()
}

const playVideo = async (timeout) => {
    await delay(timeout || 1000)
    video.play()
}


const onPageInView = async () => {
    
    playVideo()
}

const mainPage = {
    onPageInView,
    initVideo,
    stopVideo,
    playVideo
}

export default mainPage