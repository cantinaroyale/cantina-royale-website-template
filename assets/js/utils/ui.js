import { pageLoaderAnimationTime, pagesIndexes, sections } from "../consts/index.js"
import { delay } from "./index.js"

const overlayHandler = (index) => {
    const overlay = document.querySelector('.home-overlay')
      const selectedSection = sections[index]
      const src = selectedSection.overlay
      overlay.style.display = src ? 'block' :  'none'
      overlay.setAttribute('src', src )
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


const toggleSectionsZindex = (value) => {
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


const addEventsToPopup = (popup, overlay,closeBtn,  video) => {
  overlay.addEventListener('click', () => {
    togglePopup(popup, false)
      video.stop()
  })
  closeBtn.addEventListener('click', () => {
    togglePopup(popup, false)
    video.stop()
})

}


const togglePopup = (popup, show) => {
  toggleSectionsZindex(show)
  popup.style.opacity = show  ? 1 : 0
  popup.style.pointerEvents = show ? 'all' : 'none' 
}

const addEventsToVideoPreview = (popup, container, video) => {
  container.addEventListener('click', () => {
      togglePopup(popup, true)
      video.play()
  })
}


  const uiUtil = {
    overlayHandler,
    changeNavbarStyle,
    hideAppLoader,
    addEventsToPopup,
    addEventsToVideoPreview,
    togglePopup
  }

  export default uiUtil