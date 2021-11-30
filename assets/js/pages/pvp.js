import VideoController from '../videoController/index.js'
import uiUtil from '../utils/ui.js'
import { isMobile, getRootPath } from '../utils/index.js';
import { videos } from '../consts/index.js';
const rootPath = getRootPath()

class PvpPage {
    isPlaying
    video
    overlay = document.querySelector('#pvp-popup .popup-overlay')
    closeBtn = document.querySelector('#pvp-popup .popup-content-close')
    popup = document.querySelector('#pvp-popup')
    container = document.querySelector('#pvp-bottom-frame')


    constructor(){
        this.addEventsToPlayVideo()
        this.addEventsToCloseVideo()
    }

    getVideoUrl() {
        if (isMobile()) {
            return rootPath ? `/${rootPath}/${videos.mobile}` :  videos.mobile;
        } else {
            return rootPath ? `/${rootPath}/${videos.desktop}` :  videos.desktop;
        }
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


    createVideo() {
        this.video = new VideoController('pvp-video', this.getVideoUrl())
    };


    addEventsToCloseVideo = () => {
        this.overlay.addEventListener('click', () => {
            this.stopVideo()
        })
        this.closeBtn.addEventListener('click', () => {
            this.stopVideo()
        })
    }

    addEventsToPlayVideo() {
        this.container.addEventListener('click', () => {
            this.playVideo()
        })
    }

    playVideo() {
        if (!this.video) {
            this.createVideo()
        }
        this.togglePopup(true)
        this.video.play()
        this.isPlaying = true
    }

    onPageInView() {
        
    }



}


const pvpPage = new PvpPage()


export default pvpPage