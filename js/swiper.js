if(document.querySelector('.products__swiper')){
    new Swiper('.products__swiper', {
        loop: true,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
            stopOnLastslide: false
        },
        pagination: {
            el: '.products__slideFraction',
            type: 'fraction'
        },
        navigation: {
            nextEl: '.products__nextSlide',
            prevEl: '.products__prevSlide',
        },
        slidesPerView:'auto',
        spaceBetween: 30,
        speed: 1500,
    });
}
if(document.querySelector('.product__images-main')) {
    new Swiper('.product__images-main', {
        spaceBetween: 30,
        speed: 1500,
        slidesPerView: 1,
        thumbs: {
            swiper: {
                el: '.product__images-thumbs',
                slidesPerView: 4,
                spaceBetween: 15,
            }
        },
    })
}