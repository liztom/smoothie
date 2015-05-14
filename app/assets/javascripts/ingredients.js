$( document ).ready(function() {
  var $container = $('.js-container');
  var $coin      = $('#coin');

  console.log($coin);
  $('.js-ingredient-slider').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    arrows: true
  });

  $('.js-ingredient-slider').on('click', '.js-ingredient', function(){
    if($('.js-container').find('.js-container-ingredient').length < 8) {
      var ingredient = $(this).attr('data-ingredient');
      $coin[0].play();
      ($container).append('<div class="js-container-ingredient ingredient--container" draggable=true>' + ingredient + '</div>');
    } else {
      alert('You can not add more than 8 items');
    }
  });

  $('.js-container').on('click','.js-container-ingredient', function(event){
    $(this).remove();
  });

});




