const _data_inside_list = $('.list-in-data-list');
// $(window).on('scroll', function() {
//     console.log('ád')
// });
$.each(_data_inside_list, function() {
    let _d = $(this).find('.detail');
    $.each(_d, function(i) {
        $(this).find('.cm-stt').text(i + 1);

    });
})