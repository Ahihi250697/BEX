const _menuItem = $('.menu-item');
const _line = $('.menuline');
const _hamburger = $('.hamburger');
const _navbar = $('.navbar');
const _mark = $('.mark');

var _xstart = 0,
    _wstart = 0,
    _eqstart = 1;

$(window).on('scroll load resize', function() {
    let _wW = window.innerWidth;

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
    })
}).on('mouseout', function() {
    let _wW = window.innerWidth;
    if (_wW <= 1024) return;
    let _x = _xstart;
    let _w = _wstart;
    _line.css({
        width: _w,
        left: _x,
    })
}).on('click', function() {

    if (!$(this).hasClass('active')) {
        _setLineNoneActive();

        _xstart = $(this).find('.nav-link').position().left;
        _wstart = $(this).find('.nav-link').innerWidth();
        _eqstart = $(this).index();
        $(this).addClass('active');
        _line.css({
            width: _wstart,
            left: _xstart,
        })
    }
})

_hamburger.on('click', function() {
    // let _check = window.pageYOffset;
    // _check > 0 ? _check = 0 : _check = 1;
    $(this).hasClass('active') ? _remove() : _add();
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