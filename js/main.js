


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



const faqLists = document.querySelectorAll('.faq-content');

    faqLists.forEach(el => {

        el.addEventListener('click', (e) => {

            const faqList = e.currentTarget
            const faqOpenedItem = faqList.querySelector('.active')
            const faqOpenedContent = faqList.querySelector('.active .faq-answer')
            const faqControl = e.target.closest('.faq-question');
            
            if (!faqControl) return
            e.preventDefault()
            const faqItem = faqControl.parentElement;
            const faqContent = faqControl.nextElementSibling;

            if (faqOpenedItem && faqItem != faqOpenedItem) {
                faqOpenedItem.classList.remove('active');
                faqOpenedContent.style.maxHeight = null;
            }
            faqItem.classList.toggle('active');

            if (faqItem.classList.contains('active')) {
                faqContent.style.maxHeight = faqContent.scrollHeight + 'px';
            } else {
                faqContent.style.maxHeight = null;
            }

        });

    });