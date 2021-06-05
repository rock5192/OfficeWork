$(window).scroll(function () {
    if ($(this).scrollTop() > 50) {
        $("header").addClass("fixed-bar")
    }

    else {
        $("header").removeClass("fixed-bar")
    }
});
