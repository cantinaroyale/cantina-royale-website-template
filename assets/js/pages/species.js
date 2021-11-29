import { delay } from "../utils/index.js"



const sliderConfig = {
  loop: true,
  centeredSlides: true,
  slidesPerView: window.innerWidth >= 1000 ? 5 : 3,
  spaceBetween: window.innerWidth >= 1000 ? 20 : 5,
  allowTouchMove:  window.innerWidth >= 1000 ? false : true,
}


class SpeciesPage {
slider

   createSlider() {
     this.slider = new Swiper('.species-slider', sliderConfig)
    const slides = document.querySelectorAll('.species-slider .swiper-slide')
    slides.forEach((slide) => {
      const index = slide.getAttribute('data-swiper-slide-index')
      slide.addEventListener('click', () => {
        this.slider.slideToLoop(Number(index), 400)
      })
    })
  }

}



const speciesPage = new SpeciesPage()


export default speciesPage