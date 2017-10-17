$(document).ready(function() {

  var active1 = false;
  var active2 = false;
  var active3 = false;
  var active4 = false;
  var active5 = false;

    $('.main-nav').on('mousedown touchstart', function() {
    // Magic code
    // $().toggleClass();
    // Check current menu state, then changes CSS.
    if (!active1) {
      $(this).find('.test1').css({'transform': 'translate(100px,0px)'});
      // Make link text appear
      $(this).find('.nav-link').css({'opacity': '0.5'});
    } else {
      $(this).find('.test1').css({'transform': 'none'});
      $(this).find('.nav-link').css({'opacity': '0'});
    }
    // Education
    if (!active2) {
      $(this).find('.test2').css({'transform': 'translate(200px,0px)'});
      } else {
      $(this).find('.test2').css({'transform': 'none'});
    };
    // Code
    if (!active3) {
      $(this).find('.test3').css({'transform': 'translate(300px,0px)'});
    } else {
      $(this).find('.test3').css({'transform': 'none'});
    };
    // Message
    if (!active4) {
      $(this).find('.test4').css({'transform': 'translate(400px,0px)'});
    } else {
      $(this).find('.test4').css({'transform': 'none'});
    };
    // Gear
    if (!active5) {
      $(this).find('.test5').css({'transform': 'translate(500px,0px)'});
    } else {
      $(this).find('.test5').css({'transform': 'none'});
    }
    // Toggle
    console.log('Reverting menu state...');
    active1 = !active1;
    active2 = !active2;
    active3 = !active3;
    active4 = !active4;
    active5 = !active5;
    });

});