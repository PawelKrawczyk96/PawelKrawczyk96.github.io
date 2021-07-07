function move(selector) {
    $("html,body").animate(
        {
            scrollTop: $(selector).offset().top
        },
        2000
    );

    $("#menu").removeClass("show");
}
