const swiper = new Swiper('.main-swiper', {
    direction: 'horizontal',
    loop: true,
    slidesPerView: 1,
    breakpoints: {
        640: { 
            slidesPerView: 2,
            spaceBetween: 10,
        },
    },
    autoplay: {
        el: '.autoplay',
        delay: 5000,
    },
    pagination: {
        el: '.swiper-pagination'
    },
});