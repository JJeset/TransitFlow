


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


document.querySelectorAll('.faq-question').forEach(question => {
    question.addEventListener('click', () => {
        const clickedItem = question.parentNode;
        
        document.querySelectorAll('.faq-item').forEach(item => {
            if (item !== clickedItem && item.classList.contains('active')) {
                item.classList.remove('active');
            }
        });
        
        clickedItem.classList.toggle('active');
    });
});