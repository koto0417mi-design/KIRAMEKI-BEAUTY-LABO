/* お客様の声 スワイパー */
const swiper = new Swiper(".voice__slider", {
    slidesPerView: 1.26,
    watchSlidesProgress: true,
    roundLengths: true,

    spaceBetween: 15,
    centeredSlides: true,
    initialSlide: 1,
    pagination: {
        el: '.voice__pagination',
        clickable: true,
    },

    breakpoints: {
        768: {
            slidesPerView: 3,
            spaceBetween: 15,
            pagination: { enabled: false },
            allowTouchMove: false,
        }
    },
});

