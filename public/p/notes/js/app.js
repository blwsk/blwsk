
var colH = function() {
  var h = $(window).height();
  $('.col-center').css('height', h);
}

var navMore = function() {
  $('.hidden').css({
    'display': 'block'
  });
  $('#nav-more').attr({
    'haha': '1'
  });
  $('#nav-more-text').html('Less ');
  $('#nav-more-icon').html('<span class="more-glyph glyphicon glyphicon-chevron-up"></span>');
}

var navLess = function() {
  $('.hidden').css({
    'display': 'none'
  });
  $('#nav-more').attr({
    'haha': '0'
  });
  $('#nav-more-text').html('More ');
  $('#nav-more-icon').html('<span class="more-glyph glyphicon glyphicon-chevron-down"></span>');
}

$(function () {

  colH();

  $(window).resize( function() {
    colH();
  });

  $('#nav-more').click( function() {
    var a = $('#nav-more').attr('haha');
    if (a==0) {
      navMore();
    }
    else {
      navLess();
    }
  });
});
