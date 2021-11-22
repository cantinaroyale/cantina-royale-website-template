import { pagesIndexes, sections } from "./consts/index.js"
import variationsPage from './pages/variations.js';
import mainPage from './pages/main.js';
import indicator from './indicator/index.js'
import speciesPage from './pages/species.js'
import pvePage from "./pages/pve.js";
import pvpPage from "./pages/pvp.js";

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
            case pagesIndexes.pvp:
                pvpPage.onPageInView()
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
}


const clearIntervals = () => {
    variationsPage.clearInterval()
}


const hideLoader = () => {
    const loader = document.querySelector(".page-loader");
    loader.style.display = "none";
}


const resetUrl = () => {
    history.pushState("", document.title, window.location.pathname
        + window.location.search);
}




export const init = async () => {
    hideLoader()
    mainPage.initVideo()
    initFullPage()
    resetUrl()
    indicator.addEvents()
    speciesPage.initSlider()
};

window.onload = () => {
    init()
}