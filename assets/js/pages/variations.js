import {delay} from '../utils/index.js'

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



const hideLoader = () => {
    const loader = document.querySelector('#variations-ape-loader')
    const modal = document.querySelector('.ape-figure')
    loader.style.display = 'none'
    modal.style.opacity = 1
}



const onPageInView = async () => {
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

const variationsPage = {
    clearInterval,
    onPageInView
}

export default variationsPage