
import WebGlModel from '../webGlModel/index.js'
import { delay } from '../utils/index.js'

class ApesPage {
    firstWebGlInstance
    secondWebGlInstance

    constructor() {

    }
    onWebGlModalLoaded(id) {
        const loader = document.querySelector(`#${id}-loader`)
        const model = document.querySelector(`#${id}-model`)
        loader.style.display = 'none'
        model.style.opacity = 1
    }


      createWebGLModels() {
        this.firstWebGlInstance = new WebGlModel('ape-first-container-model', () => this.onWebGlModalLoaded('ape-first-container'), 3000)
        this.secondWebGlInstance = new WebGlModel('ape-second-container-model', () => this.onWebGlModalLoaded('ape-second-container'), 3000)
       
    }



    startModelsInterval(){
        this.firstWebGlInstance.startInterval()
        this.secondWebGlInstance.startInterval()
    }

    async onPageInView() {
        if (this.firstWebGlInstance && this.secondWebGlInstance) {
            this.startModelsInterval()
        }else{
            await this.createWebGLModels()
            await delay(500)
            this.startModelsInterval()
        }
        
    }


    clearIntervals() {
        if (this.firstWebGlInstance && this.secondWebGlInstance) {
            this.firstWebGlInstance.clearInterval()
            this.secondWebGlInstance.clearInterval()
        }
       
    }

}


const apesPage = new ApesPage()

export default apesPage