import { delay } from "../utils/index.js"


const sliderConfig = {
  loop: true,
  centeredSlides: true,
  slidesPerView: 5,
  spaceBetween: 30,
  allowTouchMove: false,
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