const initSlider = () => {
    const swiper = new Swiper('.species-slider', {
       loop: true,
      centeredSlides: true,
      slidesPerView: 5,
      spaceBetween: 30,
      allowTouchMove:false,
    })
    const slides = document.querySelectorAll('.species-slider .swiper-slide')
    slides.forEach((slide) => {
      const index = slide.getAttribute('data-swiper-slide-index')
      slide.addEventListener('click', () => {
       
        console.log(index)
        swiper.slideToLoop(Number(index), 400)
      })
    })
  }


  const speciesPage = {
    initSlider
  }


  export default speciesPage