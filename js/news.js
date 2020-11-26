const _pageLink = $('.page-link');
const _pageNext = $('.page-link.page-next');
const _pagePrev = $('.page-link.page-prev');

_pageLink.on('click', function(e) {
    e.preventDefault();
    let _next = $(this).hasClass('page-next');
    let _prev = $(this).hasClass('page-prev');
    let _disabled = $(this).hasClass('disabled');
    if (_disabled == true) return;
    if (_next == false && _prev == false) {
        $(this).hasClass('active') ? null : _setPagination();
        $(this).addClass('active');
        let _next = $(this).parent().next();
        let _prev = $(this).parent().prev();
        if (_next.hasClass('last-child')) {
            _pageNext.addClass('disabled');
        } else {
            _pageNext.removeClass('disabled');
        }
        if (_prev.hasClass('first-child')) {
            _pagePrev.addClass('disabled');
        } else {
            _pagePrev.removeClass('disabled');
        }
    } else
    if (_next == true && _prev == false) {
        _setNextState();
    } else {
        _setPrevState();
    }

});

function _setPagination() {
    $.each(_pageLink, function() {
        if ($(this).hasClass('active')) {
            $(this).removeClass('active');
        }
    });
    _setNextState();
}

function _setNextState() {
    $.each(_pageLink, function() {
        if ($(this).hasClass('active')) {
            let _next = $(this).parent().next();
            if (!_next.hasClass('last-child')) {
                _pagePrev.hasClass('disabled') ? _pagePrev.removeClass('disabled') : null
                $(this).removeClass('active');
                _next.find('.page-link').addClass('active');

            }
            if (_next.next().hasClass('last-child')) {
                _next.next().find('.page-link').addClass('disabled');

            }

            return false;
        }
    });
}

function _setPrevState() {
    $.each(_pageLink, function() {
        if ($(this).hasClass('active')) {
            let _prev = $(this).parent().prev();
            if (!_prev.hasClass('first-child')) {
                _pageNext.hasClass('disabled') ? _pageNext.removeClass('disabled') : null
                $(this).removeClass('active');
                _prev.find('.page-link').addClass('active');

            }
            if (_prev.prev().hasClass('first-child')) {
                _prev.prev().find('.page-link').addClass('disabled');

            }

            return false;
        }
    });
}