$(document).ready(function() {

    $(".header__burger").click(function() {
        $(this).toggleClass("header__burger--active")
        $(".header__right").toggleClass("header__right--active")
        $("body").toggleClass("fixed-body")
    })


    $(".date-field").each(function(index, el) {
        new AirDatepicker(el, {
            isMobile: true,
            autoClose: true,
            dateFormat: "dd MMMM",
            startDate: new Date(),
            minDate: new Date()
        });
    });


    // $('.video').parent().click(function() {
    //     if ($(this).children(".video").get(0).paused) {
    //         $(this).children(".video").get(0).play();
    //         $(this).children(".playpause").fadeOut();
    //     } else {
    //         $(this).children(".video").get(0).pause();
    //         $(this).children(".playpause").fadeIn();
    //     }
    // });
});