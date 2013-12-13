
(function( $ ){

  $('#more').click(function() {

    var a = $('#more').attr('mobile');

    /*
      show mobile nav on click
    */
    if ( a == 'closed' ) {
      showMobileNav();
      $('#more').attr('mobile', 'opened');
    }

    /*
      hide mobile nav on click
    */
    else if ( a == 'opened' ) {
      hideMobileNav();
      $('#more').attr('mobile', 'closed');
    }

  });

  $(window).resize( function() {

    var w = $(window).width();

    if ( w > 500 ) {

      $('.bar').attr('style', '');
      $('.main').attr('style', '');
      $('.mobile-hide').css('display', 'block');

    }

    else if ( w <= 500 ) {

      $('#more').html('More');
      $('.mobile-hide').css('display', 'none');

    }

    return this;

  });

})( jQuery );


var hideMobileNav = function() {
  $('#more').html('More');
  $('.mobile-hide').css('display', 'none');
  $('.bar').css({
    'height': 57
  });
  $('.main').css({
    'padding-top': 57
  });
}

var showMobileNav = function() {
  $('#more').html('Less');
  $('.mobile-hide').css('display', 'block');
  $('.bar').css({
    'height': 195
  });
  $('.main').css({
    'padding-top': 195
  });
}
