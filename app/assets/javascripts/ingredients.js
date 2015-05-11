$( document ).ready(function() {
  var $container = $('.js-container')
  $('.js-ingredient-slider').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    arrows: true
  });

  $('.js-ingredient').on('click', function(){
    if($('.js-container').find('.js-ingredient').length < 8) {
      $(this).clone().attr('draggable', true).appendTo($container)
    } else {
      alert('You can not add more than 8 items');
    }
  });

});

