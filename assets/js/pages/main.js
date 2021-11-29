import { delay, isMobile } from "../utils/index.js"
import VideoController from '../videoController/index.js'




class MainPage {
    video
    isPlaying
    getVideoUrl() {
        if (isMobile()) {
            return "/assets/videos/mobile/video-low-quality.m3u8";
        } else {
            return "/assets/videos/desktop/video.m3u8";
        }
    }

    createVideo() {
        this.video = new VideoController('main-video', this.getVideoUrl())
    };

    stopVideo() {
        if (this.isPlaying) {
            this.video.stop()
            this.isPlaying = false
        }
    }

    async onPageInView(delayMilliseconds){
        // this.playVideo(delayMilliseconds)
    }


    async playVideo(delayMilliseconds){
        if (!this.video) {
            this.createVideo()
        }
        if(delayMilliseconds){
            await delay(delayMilliseconds) 
        }

        this.video.play()
        this.isPlaying = true
    }

}


const mainPage = new MainPage()





export default mainPage