define(['jquery'], function($){

  setTimeout(function(){
    $('h1').html('click me to change my color');
    $('canvas').css('background-color', 'red');
  }, 2000);

    $('canvas').click(function(){
      $('canvas').css({
        'background-color': 'purple',
        'border': '5px solid green',
        'position': 'relative'
      });
      $('canvas::after').css({
        'position': 'absolute',
        'left': '0px',
        'content': 'party',
        'color': 'white',
        'z-index': '100'
      })
    });
});
