$(document).ready(function() {
  $('body').css('display', 'none');
  $('body').fadeIn(300);

  $('a:not(.contact_icon)').click(function() {
    event.preventDefault();
    newLocation = this.href;
    $('body').fadeOut(300, window.location = newLocation);
  });

  if (!Modernizr.cssanimations) {
    $('.work_content_container').css({
      bottom: -400,
      display: 'block'
    });

    $( ".home_header" ).delay( 1500 ).animate({
      left: '50%',
      top: '20%'
    }, 1000);

    $('.home_paragraph').delay(2500).animate({
      opacity: 1
    }, 500);

    $('.work_content_container').delay(2500).animate({
      height: 400,
      bottom: -350,
      opacity: 1
    }, 1000);
  }
});