$( document ).ready(function() {
  var $container = $('.js-container');

  $('.js-ingredient-slider').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    arrows: true
  });

  $('.js-ingredient').on('click', function(){
    if($('.js-container').find('.js-container-ingredient').length < 8) {
      var ingredient = $(this).attr('data-ingredient');
      ($container).append('<div class="js-container-ingredient ingredient--container" draggable=true>' + ingredient + '</div>');
    } else {
      alert('You can not add more than 8 items');
    }
  });

  $('.js-container').on('drag','.js-container-ingredient', function(event){
    $(this).remove();
  });

});

