define(['jquery'], function($){

  setTimeout(function(){
    $('h1').html('click me to change my color');
    $('canvas').css('background-color', 'red');
  }, 2000);

    $('canvas').click(function(){
      $('canvas').css('background-color', 'green');
    });
});
