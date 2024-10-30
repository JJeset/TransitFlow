(function () {


// Burger menu

    document.addEventListener('click', burgerInit)

    function burgerInit(e) {

        const burgerIcon = e.target.closest('.burger-icon')
        const burgerNavLink = e.target.closest('.nav__link')

        if (!burgerIcon && !burgerNavLink) return
        if (document.documentElement.clientWidth > 1100) return

        if (!document.body.classList.contains('body--opened-menu')) {
            document.body.classList.add('body--opened-menu')
        } else {
            document.body.classList.remove('body--opened-menu')
        }

    }






new Swiper('.testimonials__slider', {
    spaceBetween: 0,
    slidesPerView: 1,
    centeredSlides: true,
    initialSlide: 0,


    navigation: {
        nextEl: '.testimonials__next',
        prevEl: '.testimonials__prev',
    },

    breakpoints: {
        601: {
            slidesPerView: 1,
            centeredSlides: true,
        },
        1201: {
            slidesPerView: 2,
            centeredSlides: false
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

})()