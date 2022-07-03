let bathSlidersArray = []

function bathSlider() {
    $(".bath-view").each(function(index, el) {
        $(el).attr("data-slider-id", `${index}`)
        bathSlidersArray[index] = new Swiper(`.bath-view[data-slider-id="${index}"] .swiper-container`, {
            slidesPerView: 1,
            spaceBetween: 10,
            navigation: {
                nextEl: `.bath-view[data-slider-id="${index}"] .swiper-button-next`,
                prevEl: `.bath-view[data-slider-id="${index}"] .swiper-button-prev`,
            },
            scrollbar: {
                el: `.bath-view[data-slider-id="${index}"] .swiper-scrollbar`,
                draggable: true,
            },
        })
    })
}


bathSlider()