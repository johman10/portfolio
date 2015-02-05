$(document).ready(function() {
  if (!Modernizr.cssanimations) {
    $( ".home_header" ).delay( 2000 ).animate({
      left: '50%',
      top: '20%'
    }, 1000);

    $('.home_paragraph').delay(3000).animate({
      opacity: 1
    }, 500);
  }
});