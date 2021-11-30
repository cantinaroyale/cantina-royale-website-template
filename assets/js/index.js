import { pagesIndexes, sections } from "./consts/index.js"
import mainPage from './pages/main.js';
import indicator from './indicator/index.js'
import speciesPage from './pages/species.js'
import pvePage from "./pages/pve.js";
import pvpPage from "./pages/pvp.js";
import uiUtil from "./utils/ui.js";
import variationsPage from "./pages/variations.js";
import apesPage from "./pages/apes.js";
import { delay } from "./utils/index.js";


const initFullPage = () => {
    $("#fullpage").fullpage({
        controlArrows: false,
        onLeave: changePage,
    });
}


const changePage =  (_val, page) => {
    console.log('test')
    const index = page - 1;
    $.fn.fullpage.setAllowScrolling(false)
    onPageChanged(index)
    location.replace(sections[index].link)
    test()
  
    //sketch.change(index, () => $.fn.fullpage.setAllowScrolling(true));
};

const test = async () => {
    await delay(1200)
    $.fn.fullpage.setAllowScrolling(true)
}





const onPageChanged = async (index) => {
    indicator.changeActiveSection(index)
    uiUtil.overlayHandler(index)
    uiUtil.bgHandler(index)
    uiUtil.changeNavbarStyle(index)
    uiUtil.toggleIndicator(index > 0)

    clearIntervals()
    stopVideos()

    switch (index) {
        case pagesIndexes.variations:
            variationsPage.onPageInView()
            break;
        case pagesIndexes.main:
            mainPage.onPageInView()
            break;
        case pagesIndexes.pve:
            pvePage.onPageInView()
            break;
        case pagesIndexes.pvp:
            pvpPage.onPageInView()
            break;
        case pagesIndexes.apes:
            apesPage.onPageInView()
            break;
        default:
    }
}


const stopVideos = () => {
    mainPage.stopVideo()
    pvePage.stopVideo()
    pvpPage.stopVideo()
    variationsPage.stopVideo()
    

}


const clearIntervals = () => {
    variationsPage.clearInterval()
    apesPage.clearIntervals()
}


const resetUrl = () => {
    history.pushState("", document.title, window.location.pathname
        + window.location.search);
}


export const init = async () => {
    initFullPage()
    speciesPage.createSlider()
    resetUrl()
    indicator.addEvents()
    await uiUtil.hideAppLoader()
    mainPage.playVideo()
    
}

onload = () => {
    init()
}