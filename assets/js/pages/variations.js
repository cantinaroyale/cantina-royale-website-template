import {delay} from '../utils/index.js'
import VideoController from '../videoController/index.js'
let video


let interval
const initWebGL = () => {
    const gameInstance = UnityLoader.instantiate(
        "gameContainer",
        "/assets/js/webgl/BAYC WebGL.json",
    )
    gameInstance.onProgress = (instance, p) => {
        if (p === 1) {
            hideLoader()
        }
      }
    window.gameInstance = gameInstance;
}




const initVideo = () => {
    let videoSrc;
    if (window.innerWidth <= 600) {
        videoSrc = "/assets/videos/mobile/video-low-quality.m3u8";
    } else {
        videoSrc = "/assets/videos/desktop/video.m3u8";
    }
    video = new VideoController('variations-video', videoSrc)
};



const hideLoader = () => {
    const loader = document.querySelector('#variations-ape-loader')
    const modal = document.querySelector('.ape-figure')
    loader.style.display = 'none'
    modal.style.opacity = 1
}



const onPageInView = async () => {
    if(!video){
    initVideo()
    }
    video.play()

    if (!window.gameInstance) {
        await delay(1000)
        initWebGL()
    }
   
    const gameInstance = window.gameInstance;
    interval = setInterval(() => {
        gameInstance.SendMessage('BAYCBodyParts', "RandomiseCharacter")
    }, 10000)
}


const clearInterval =  () => {
    if (interval) {
        window.clearInterval(interval)
        interval = null
    }
}


const stopVideo = () => {
    if(video){
        video.stop()
    }
 
}

const variationsPage = {
    clearInterval,
    onPageInView,
    stopVideo
}

export default variationsPage