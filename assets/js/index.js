import { pagesIndexes, sections } from "./consts/index.js"
import variationsPage from './pages/variations.js';
import mainPage from './pages/main.js';
import indicator from './indicator/index.js'
import speciesPage from './pages/species.js'
import pvePage from "./pages/pve.js";
import pvpPage from "./pages/pvp.js";
import uiUtil from "./utils/ui.js";

const initFullPage = () => {
    $("#fullpage").fullpage({
        controlArrows: false,
        onLeave: changePage,
    });
}


const changePage = (_val, page) => {
    const index = page - 1;
    $.fn.fullpage.setMouseWheelScrolling(false)
    onPageChanged(index)
    window.location.replace(sections[index].link)
    sketch.change(index, () => $.fn.fullpage.setMouseWheelScrolling(true));
};


const onPageChanged = (index) => {
    indicator.changeActiveSection(index)
     uiUtil.overlayHandler(index)
     uiUtil.changeNavbarStyle(index)
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
        default:
    }
}


const stopVideos = () => {
    mainPage.stopVideo()
    pvePage.stopVideo()
    variationsPage.stopVideo()
}


const clearIntervals = () => {
    variationsPage.clearInterval()
}


const resetUrl = () => {
    history.pushState("", document.title, window.location.pathname
        + window.location.search);
}




export const init =  async () => {
    mainPage.initVideo()
    variationsPage.initWebGL()
    initFullPage()
    resetUrl()
    indicator.addEvents()
    speciesPage.initSlider()
    //await uiUtil.hideAppLoader()
    mainPage.playVideo(500)
}

window.onload = () => {
    init()
}