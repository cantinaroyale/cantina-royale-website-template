import { videos } from "../consts/index.js"
import { delay, isMobile, getRootPath } from "../utils/index.js"
import VideoController from '../videoController/index.js'



    const rootPath = getRootPath()
class MainPage {
    video
    isPlaying
    getVideoUrl() {
        if (isMobile()) {
            return rootPath ? `/${rootPath}/${videos.mobile}` : videos.mobile 
        } else {
            return rootPath ? `/${rootPath}/${videos.desktop}` : videos.desktop 
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
         this.playVideo(delayMilliseconds)
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