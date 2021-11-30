import { pageLoaderAnimationTime, pagesIndexes, sections, animations } from "../consts/index.js"
import { delay, getRootPath } from "./index.js"

const overlayHandler = (index) => {
  const rootPath = getRootPath()
    const overlay = document.querySelector('.home-overlay')
      const selectedSection = sections[index]
      const src = selectedSection.overlay
      overlay.style.display = src ? 'block' :  'none'
      overlay.setAttribute('src', rootPath ?  `/${rootPath}/${src}` :  src )
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


const toggleIndicator = (val) => {
  const container = document.querySelector('.indicator')
    if(val){
      container.style.display='block'
      container.classList.remove(animations.fadeOutRight)
    }else{
      container.classList.add(animations.fadeOutRight)
    }
 
}


export const toggleSectionsZindex = (value) => {
  const sections = document.querySelector('.sections')
  sections.style.zIndex = value  ? '99999' : ''
}


const hideAppLoader = async () => {
    const homeOverlay = document.querySelector(".home-overlay");
    const loader = document.querySelector(".app-loader");
    const scroller  = document.querySelector('.scroller')
    const navbarFlex = document.querySelector(".navbar-flex");
     await delay(pageLoaderAnimationTime)
    loader.style.opacity = 0;
    homeOverlay.style.opacity = 1
    navbarFlex.style.display = 'flex'
    scroller.style.display = 'flex'
    await delay(1000)
    loader.style.display = 'none';
}









  const uiUtil = {
    overlayHandler,
    changeNavbarStyle,
    hideAppLoader,
   
    toggleIndicator,
    toggleSectionsZindex
  }

  export default uiUtil