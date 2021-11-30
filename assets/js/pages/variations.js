import { isMobile } from '../utils/index.js'
import VideoController from '../videoController/index.js'
import WebGlModel from '../webGlModel/index.js'



class VariationsPage {
    video
    webGlModel
    isPlaying
    timeout
    constructor() {
       
    }

    getVideoUrl (){
        if (isMobile()) {
            return "/assets/videos/mobile/video-low-quality.m3u8";
        } else {
            return "/assets/videos/desktop/video.m3u8";
        }
    }

    onWebGlModalLoaded() {
        const loader = document.querySelector('#variations-ape-loader')
        const modal = document.querySelector('.ape-figure')
        loader.style.display = 'none'
        modal.style.opacity = 1
    }

    createWebGLModel() {
        this.webGlModel = new WebGlModel('gameContainer', this.onWebGlModalLoaded)
    }

    createVideo = () => {
        this.video = new VideoController('variations-video', this.getVideoUrl())
    };


    async onPageInView() {
        if (!this.video) {
            this.createVideo()
        }
        if(!this.webGlModel){
        this.createWebGLModel()
        }
      
        this.webGlModel.startInterval()
        this.video.play()
        this.isPlaying = true
    }

    clearInterval() {
        if(this.webGlModel){
            this.webGlModel.clearInterval()
        }       
    }

    stopVideo() {
        if (this.isPlaying) {
            this.video.stop()
            this.isPlaying = false
        }
    }

}



const variationsPage = new VariationsPage()

export default variationsPage