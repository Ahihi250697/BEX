const _menuItem = $('.menu-item');
const _navLink = $('.nav-link');
const _subMenu = $('.sub-menu');
const _line = $('.menuline');
const _hamburger = $('.hamburger');
const _navbar = $('.navbar');
const _mark = $('.mark');
const _totop = $('.to-top-button');
const _wHeight = window.innerHeight;

//-----close all sub menu
$.each(_subMenu, function() {
    $(this).slideUp("300");
});

var _xstart = 0,
    _wstart = 0,
    _eqstart = 1;

$(window).on('scroll load resize', function(e) {
    let _wW = window.innerWidth;
    let _wY = window.pageYOffset;

    if (_wY >= _wHeight / 2) {
        _totop.addClass('active');
    } else {
        _totop.removeClass('active');
    }
    if (_wW > 1024) {
        _remove();
    }
});


function _setLine() {
    $.each(_menuItem, function() {
        if ($(this).hasClass('active')) {
            _xstart = $(this).find('.nav-link').position().left;
            _wstart = $(this).find('.nav-link').innerWidth();
            _eqstart = $(this).index();
            _line.css({
                width: _wstart,
                left: _xstart,
            })
        }
    })
}

_setLine();

function _setLineNoneActive() {
    $.each(_menuItem, function() {
        $(this).removeClass('active');
    })
}

_menuItem.on('mouseenter', function() {
        let _wW = window.innerWidth;
        if (_wW <= 1024) return;
        let _x = $(this).find('.nav-link').position().left;
        let _w = $(this).find('.nav-link').innerWidth();
        let _timeDuration = (Math.abs(_eqstart - $(this).index()) + 1) * .1 + .1;
        _line.css({
            width: _w,
            left: _x,
            'transition-duration': _timeDuration + 's'
        });
    }).on('mouseout', function() {
        let _wW = window.innerWidth;
        if (_wW <= 1024) return;
        let _x = _xstart;
        let _w = _wstart;
        _line.css({
            width: _w,
            left: _x,
        })
    })
    // .on('click', function() {



//     if (!$(this).hasClass('active')) {
//         $(this).addClass('active');
//         $(this).find('.sub-menu').stop().slideDown("300");
//     } else {
//         $(this).removeClass('active');
//         $(this).find('.sub-menu').stop().slideUp("300");
//     }
//     if ($(this).find('.nav-link').attr('href') == "#") {
//         return false;
//     }
// })

_navLink.on('click', function(event) {
    event.preventDefault();
    let _w = $(this).innerWidth();
    let _ww = $(window).innerWidth();
    console.log(_ww)
    if (event.offsetX < _w - 40 || _ww > 1024) {
        window.location = $(this).attr('href');

    } else {
        if (!$(this).parent().hasClass('active')) {
            $(this).parent().addClass('active');
            $(this).parent().find('.sub-menu').stop().slideDown("300");
        } else {
            $(this).parent().removeClass('active');
            $(this).parent().find('.sub-menu').stop().slideUp("300");
        }
    }

    // if ($(this).attr('href') == "#") {
    //     if (window.innerWidth > 1024) {
    //         return;
    //     } else {
    //         if (!$(this).parent().hasClass('active')) {
    //             $(this).parent().addClass('active');
    //             $(this).parent().find('.sub-menu').stop().slideDown("300");
    //         } else {
    //             $(this).parent().removeClass('active');
    //             $(this).parent().find('.sub-menu').stop().slideUp("300");
    //         }
    //     }

    // }
});

_hamburger.on('click', function() {
    // let _check = window.pageYOffset;
    // _check > 0 ? _check = 0 : _check = 1;
    $(this).hasClass('active') ? _remove() : _add();
    return false;
});

_mark.on('click', function() {
    _hamburger.hasClass('active') ? _remove() : _add();
})

function _remove() {
    _hamburger.removeClass('active');
    _navbar.removeClass('active');
    _mark.removeClass('active');
}

function _add() {
    _hamburger.addClass('active');
    _navbar.addClass('active');
    _mark.addClass('active');
}

_totop.click(function(e) {
    e.preventDefault();
    $("html,body").animate({
            scrollTop: 0,
        },
        1000,
        "swing"
    );
});