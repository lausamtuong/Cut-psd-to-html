$(document).ready(function(){
    $('.category-list').slick({
        infinite: true,
        slidesToShow: 4,
        autoplay: false,
        autoplaySpeed: 1000,
        prevArrow:"<button type='button' class='slick-prev pull-left'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
        nextArrow:"<button type='button' class='slick-next pull-right'><i class='fa fa-angle-right' aria-hidden='true'></i></button>"
     
    });
  });