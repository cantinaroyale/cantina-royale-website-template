import { delay } from "../utils/index.js"
import VideoController from '../videoController/index.js'
let video

const onPageInView = async () => {
    await delay(1000)
    video.play()
}


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


const mainPage = {
    onPageInView,
    initVideo,
    stopVideo
}

export default mainPage