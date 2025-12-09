
const swiper = new Swiper(".voice__slider", {
    slidesPerView: 1,
    spaceBetween:20,

      pagination: {
    el: '.voice__pagination',
    clickable: true,
      },

      breakpoints: {
    768: {
      slidesPerView: 3,
      spaceBetween:30,
      pagination: { enabled: false },
      allowTouchMove:false,
    }
  },
});