console.log(Hls) 


class VideoController {
    videoUrl
    video
    constructor(id, url) {
        this.videoUrl = url
        this.video = document.querySelector(`#${id}`);
        this.init()
    }


    init() {
        if (this.video.canPlayType("application/vnd.apple.mpegurl")) {
            this.video.src = this.videoUrl
        }
        if (Hls.isSupported()) {
            var hls = new Hls();
            hls.loadSource(this.videoUrl);
            hls.attachMedia(this.video);
        }
    }


    stop() {
        this.video.pause();
        this.video.style.opacity = 0;
        this.video.currentTime = 0;
    }
    play() {
        this.video.play();
        this.video.style.opacity = 1;
    }

}


export default VideoController
