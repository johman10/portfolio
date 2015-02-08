$(document).ready(function() {
  if (!Modernizr.cssanimations) {
    $( ".home_header" ).delay( 1500 ).animate({
      left: '50%',
      top: '20%'
    }, 1000);

    $('.home_paragraph').delay(2500).animate({
      opacity: 1
    }, 500);
  }
});