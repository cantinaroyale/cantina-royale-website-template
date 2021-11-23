import { pagesIndexes, sections, pageLoaderAnimationTime } from "./consts/index.js"
import variationsPage from './pages/variations.js';
import mainPage from './pages/main.js';
import indicator from './indicator/index.js'
import speciesPage from './pages/species.js'
import pvePage from "./pages/pve.js";
import pvpPage from "./pages/pvp.js";
import { delay } from "./utils/index.js";

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
    clearIntervals()
    stopVideos()
    changeNavbarStyle(index)
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

const changeNavbarStyle = (index) => {
    const navbar = document.querySelector('.navbar')
    switch (index) {
        case pagesIndexes.main:
            navbar.classList.remove('navbar-transparent')
            break;
        default:
            navbar.classList.add('navbar-transparent')
            break;
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


const hideLoader = async () => {
    await delay(pageLoaderAnimationTime)
    const homeOverlay = document.querySelector(".home-overlay");
    const loader = document.querySelector(".app-loader");
    loader.style.opacity = 0;
    homeOverlay.style.opacity = 1
    const navbarFlex = document.querySelector(".navbar-flex");
    navbarFlex.style.display = 'flex'
    await delay(1000)
    loader.style.display = 'none';
}


const resetUrl = () => {
    history.pushState("", document.title, window.location.pathname
        + window.location.search);
}




export const init =  async () => {
    mainPage.initVideo()
    initFullPage()
    resetUrl()
    indicator.addEvents()
    speciesPage.initSlider()
    await hideLoader()
    mainPage.playVideo(500)
}

window.onload = () => {
    init()
}