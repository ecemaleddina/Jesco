const testiSwiper = new Swiper('.testi-swiper', {
    direction: 'horizontal',
    loop: true,
    slidesPerView: 1,
    spaceBeetween: 10,

    breakpoints: {
        768: {
            slidesPerView: 2,
            spaceBetween: 20
        },

        1200: {
            slidesPerView: 3,
            spaceBetween: 30
        },
    }

});

const brandSwiper = new Swiper('.brand-swiper', {
    direction: 'horizontal',
    loop: true,
    slidesPerView: 2,
    spaceBeetween: 10,

    breakpoints: {
        576: {
            slidesPerView: 3,
            spaceBetween: 20
        },

        992: {
            slidesPerView: 4,
            spaceBetween: 30
        },

        1200: {
            slidesPerView: 5,
            spaceBetween: 40
        }
    }

});

const prodSwiper = new Swiper('.prod-swiper', {
    direction: 'horizontal',
    loop: true,
    slidesPerView: 1,
    spaceBeetween: 10,

    breakpoints: {
        480: {
            slidesPerView: 2,
            spaceBetween: 20
        },

        768: {
            slidesPerView: 3,
            spaceBetween: 30
        },

        1200: {
            slidesPerView: 4,
            spaceBetween: 40
        }
    }

});