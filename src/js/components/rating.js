$(".rating__item").click(function() {
    let ratingItem = parseInt($(this).attr("data-rating-value"))
    $(this).parent(".rating").attr("data-total-rating", ratingItem)
})