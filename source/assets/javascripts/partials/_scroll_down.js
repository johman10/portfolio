$(document).ready(function() {
  $('.arrow-down-wrapper').click(function(event) {
    position = $('#js-projects-anchor').offset().top;
    $('html, body').animate({
      scrollTop: position
    }, 300);
    // $(document).scrollTop(position);
  });
});
