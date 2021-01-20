// const { get } = require("browser-sync");

$('.people-slider').slick({
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    arrows: true,
    prevArrow: $('.people-bttn.left button').get(0),
    nextArrow: $('.people-bttn.right button').get(0),
    pauseOnHover: false
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
  });

  function getScrollTop() {
    return document.documentElement.scrollTop
            || document.body.scrollTop
            || window.scrollY
            || window.pageYOffset;
  }
let t = getScrollTop();
let scrollAll = $('body').outerHeight() - window.innerHeight;
  window.addEventListener('scroll', function(){
    if(t < getScrollTop()) {
      $('.firstView-container.banner').css('transform', 'translateY('+ (-getScrollTop()/4) +'px)')
      t = getScrollTop();
    }else{
      $('.firstView-container.banner').css('transform', 'translateY('+ (-getScrollTop()/4) +'px)')
      t = getScrollTop();
    }
    // $('.firstView-container.banner')
  })