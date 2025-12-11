
const swiper = new Swiper(".voice__slider", {
    slidesPerView: 1.3,
    spaceBetween:15,
    centeredSlides:true,
    initialSlide:1,
      pagination: {
    el: '.voice__pagination',
    clickable: true,
      },

      breakpoints: {
    768: {
      slidesPerView: 3,
      spaceBetween:15,
      pagination: { enabled: false },
      allowTouchMove:false,
    }
  },
});