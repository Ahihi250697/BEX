$('.people-slider').slick({
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: false,
    arrows: true,
    prevArrow: $('.people-bttn.right button').get(0),
    nextArrow: $('.people-bttn.left button').get(0)
  });

  $('.people-slider').on('beforeChange', function(event, slick, currentSlide, nextSlide){
    $('.people-slider .slick-slide').removeClass('active');
    slick.$slides.eq(nextSlide).addClass('active');
    if(nextSlide == 0) {
      slick.$slides.last().next().addClass('active');
    }
    if(nextSlide == slick.$slides.length - 1){
      slick.$slides.first().prev().addClass('active');
    }
  });

  $('.scroll-text').on('click', function(){
    $('body, html').animate({scrollTop: $('.firstView').outerHeight()}, 'slow');
  })