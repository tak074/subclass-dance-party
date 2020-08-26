
$(document).ready(function() {
  window.dancers = [];

  $('.addDancerButton').on('click', function(event) {
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');
    var dancerMakerFunction = window[dancerMakerFunctionName];
    var dot = new dancerMakerFunction(
      $('body').height() * ((Math.random() * 0.4) + 0.6),
      $('body').width() * Math.random(),
      60 / 113 * 1000
    );
    $('body').append(dot.$node);
  });

  //add Rick to the floor
  $('.addRickButton').on('click', function(event) {
    var rickMakerFunctionName = $(this).data('dancer-maker-function-name');
    var rickMakerFunction = window[rickMakerFunctionName];
    var dancer = new rickMakerFunction();
    $('body').append(dancer.$node);
    $('.spotlight').css('opacity', '100');
  });

  //line-up all dancers
  $('.line-up').on('click', function(event) {
    $('.dancer').css('top', '70%');
  });

  //jumper
  $('.addJumperButton').on('click', function(event) {
    var jumperMakerFunctionName = $(this).data('dancer-maker-function-name');
    var jumperMakerFunction = window[jumperMakerFunctionName];

    var jump = new jumperMakerFunction(50, 25, 100);
    $('body').append(jump.$node);
  });

});
// $('body').height() * ((Math.random() * 0.4) + 0.6),
//       $('body').width() * Math.random(),
//       60 / 113 * 1000