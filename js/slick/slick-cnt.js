$('#slide-div2').slick({
    arrows: false,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: 'linear',
    speed: 9000,
    slidesToShow: 3,
    slidesToScroll: 1,
    respondTo: 'window',
    responsive: [
        {
          breakpoint: 600,     // 600〜1023px
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
          }
        }
    ]
});
$('.multiple-items').slick({
    dots: true,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    prevArrow: '<img src="/images/btn-prev.png" class="slide-arrow prev-arrow">',
    nextArrow: '<img src="/images/btn-next.png" class="slide-arrow next-arrow">',
    respondTo: 'window',
    responsive: [
        {
          breakpoint: 600,     // 600〜1023px
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        }
    ]
  });
