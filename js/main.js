


new Swiper('.testimonials__slider', {
    spaceBetween: 0,
    slidesPerView: 1,
    initialSlide: 0,


    navigation: {
        nextEl: '.testimonials__next',
        prevEl: '.testimonials__prev',
    },

    breakpoints: {
        901: {
            slidesPerView: 1.5,
        },
        1201: {
            slidesPerView: 2
        }
    }

});