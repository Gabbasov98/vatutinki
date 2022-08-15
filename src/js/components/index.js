function mainSlider() {
    var swiper = new Swiper('.main .swiper-container', {
        slidesPerView: 1,
        spaceBetween: 0,
        direction: 'vertical',
        effect: 'fade',
        fadeEffect: {
            crossFade: true
        },
        autoplay:{
          delay: 2000
        },
        speed: 1000,
        scrollbar: {
            el: '.main .swiper-scrollbar',
            draggable: true,
            verticalClass: 'swiper-scrollbar-vertical'
        },
        on: {
            init: function () {
                let allSlides = $(".main .swiper-slide").length
                if(allSlides<10){
                    allSlides = `0${allSlides}`
                }
                $(".main__all").html(allSlides)
            },
            slideChange: function () {
                let currentSlide = this.activeIndex+1
                if(currentSlide<10){
                    currentSlide = `0${currentSlide}`
                }
                $(".main__current").html(currentSlide)
            }
        },
    })
}

mainSlider()
