let galleryArray = []

function gallery() {
    $(".catalog-group__gallery").each(function(index, el) {
        $(el).attr("data-slider-id", `${index}`)
        galleryArray[index] = {
            thumbs: {},
            swiper: {}
        }

        galleryArray[index].thumbs = new Swiper(`.catalog-group__gallery[data-slider-id="${index}"] .mySwiper`, {
            spaceBetween: 8,
            slidesPerView: 3,
            freeMode: true,
            watchSlidesProgress: true,
        });
        galleryArray[index].swiper = new Swiper(`.catalog-group__gallery[data-slider-id="${index}"] .mySwiper2`, {
            spaceBetween: 10,
            navigation: {
                nextEl: ".catalog-group__gallery .swiper-button-next",
                prevEl: ".catalog-group__gallery .swiper-button-prev",
            },
            thumbs: {
                swiper: galleryArray[index].thumbs,
            },
            breakpoints: {
                320: {
                    slidesPerView: 1.2,
                },
                600: {
                    slidesPerView: 1,
                },
            }
        });
    })
}


gallery()