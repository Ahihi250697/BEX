const _option_checked = $('.option-checked');
const _option_list = $('.option-list li');
var _option_is_open = 0;
_option_checked.on('click', function() {
    //let _parent = $(this).parents('.form-inline');
    //let _option_select = _parent.find('.option-checked');
    if ($(this).hasClass('active')) {
        $(this).removeClass('active');
        $(this).parent().find('.option-list').removeClass('active');
        _option_is_open = 0;
    } else {
        $.each(_option_checked, function(e) {
            if ($(this).hasClass('active')) {
                $(this).removeClass('active');
                $(this).parent().find('.option-list').removeClass('active');
            }
        });

        $(this).addClass('active');
        $(this).parent().find('.option-list').addClass('active');
        _option_is_open = 1;
    }



})
_option_list.on('click', function() {
    let _parent = $(this).parent();
    let _parent_checked = $(this).parents('.option-inline').find('.option-checked');
    let _data_value = $(this).attr('data-value');

    if (_parent.hasClass('active')) {
        console.log('asdsadasd');
        _parent_checked.attr('data-value', _data_value);
        _parent_checked.text(_data_value);
        _parent_checked.click();
    }
})

$(window).on('click', function(e) {

    if (_option_is_open == 1) {
        let _mx = e.pageX,
            _my = e.pageY;
        $.each(_option_checked, function() {
            if ($(this).hasClass('active')) {
                let _x = $(this).offset().left,
                    _y = $(this).offset().top,
                    _w = $(this).innerWidth(),
                    _h = $(this).innerHeight();

                console.log(_w, _h, _mx);
                if (_mx > _x + _w || _mx < _x || _my < _y || _my > _y + _h) {
                    $(this).click();
                    
                }
                //$(this).removeClass('active');
                //$(this).parent().find('.option-list').removeClass('active');
            }
        })


    }

})