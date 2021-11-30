import { bodyPartsInterval } from "../consts/index.js"
import { getRootPath } from "../utils/index.js"
const rootPath = getRootPath()
class WebGlModel {
    gameInstance
    containerId
    interval
    onLoaded
    constructor(id, onLoaded, intervalMilliseconds) {
        this.containerId = id
        this.onLoaded = onLoaded
        this.init()
        this.intervalMilliseconds = intervalMilliseconds
    }



    init() {
        try {

            const instance = UnityLoader.instantiate(
                this.containerId,
                rootPath ? `/${rootPath}/assets/js/webgl/BAYC WebGL.json` : "/assets/js/webgl/BAYC WebGL.json",
            )
            instance.onProgress = (i, p) => {
                if (p === 1 && this.onLoaded) {
                    this.onLoaded()
                }
            }

            this.gameInstance = instance;

            this.randomizeBodyParts()
        } catch (err) {
            console.log('error' + err)
        }

    }


    startInterval() {
        this.interval = setInterval(() => {
            this.randomizeBodyParts()
        }, this.intervalMilliseconds || bodyPartsInterval)
    }

    randomizeBodyParts() {
        this.gameInstance.SendMessage('BAYCBodyParts', "RandomiseCharacter")
    }

    clearInterval() {
        if (this.interval) {
            window.clearInterval(this.interval)
            this.interval = null
        }

    }
}


export default WebGlModel