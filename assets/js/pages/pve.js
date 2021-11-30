import { videos } from "../consts/index.js";
import { isMobile, getRootPath } from "../utils/index.js";
import uiUtil from "../utils/ui.js";
import VideoController from '../videoController/index.js'

const rootPath = getRootPath()

class PvePage {
    video
    isPlaying
    popup = document.querySelector('#pve-popup')
    overlay = document.querySelector('#pve-popup .popup-overlay')
    closeBtn = document.querySelector('#pve-popup .popup-content-close')
    popup = document.querySelector('#pve-popup')
    container = document.querySelector('#pve-bottom-frame')

    constructor(){
        this.addEventsToPlayVideo()
        this.addEventsToCloseVideo()
    }

    getVideoUrl() {
        if (isMobile()) {
            return rootPath ? `/${rootPath}/${videos.mobile}` : videos.mobile ;
        } else {
            return rootPath ? `/${rootPath}/${videos.desktop}` : videos.desktop ;
        }
    }

    createVideo() {
        this.video = new VideoController('pve-video', this.getVideoUrl())
    };


    addEventsToPlayVideo() {
        console.log(this.container)
        this.container.addEventListener('click', () => {
            this.playVideo()
        })
    }

    addEventsToCloseVideo = () => {
        this.overlay.addEventListener('click', () => {
            this.stopVideo()
        })
        this.closeBtn.addEventListener('click', () => {
            this.stopVideo()
        })
    }



    stopVideo() {
        if (this.isPlaying) {
            this.video.stop()
            this.isPlaying = false
            this.togglePopup(false)
        }
       
    }

    togglePopup(show) {
        uiUtil.toggleSectionsZindex(show)
        this.popup.style.opacity = show ? 1 : 0
        this.popup.style.pointerEvents = show ? 'all' : 'none'
    }


    onPageInView() {
       
    }


    playVideo() {
        if (!this.video) {
            this.createVideo()
        }
        this.togglePopup(true)
        this.video.play()
        this.isPlaying = true
    }

}


const pvePage = new PvePage()
export default pvePage