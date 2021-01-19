const _goto = $('.js-goto');

_goto.on('click', function(e) {
    e.preventDefault();
    let _a = $(this).attr('href');
    let _h = $(_a).offset().top - 100;
    $("html,body").animate({
            scrollTop: _h,
        },
        1000,
        "swing"
    );
});