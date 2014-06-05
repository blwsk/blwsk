$(function () {
  var docWidth = $(document).width();
  var containerWidth = $('.container').outerWidth();
  var sideWidth = Math.floor((docWidth - containerWidth) / 2);
  $('.side-container').css('width', sideWidth);
  $('.side-container-left').css('width', sideWidth);
  $('.side-container-right').css({
    'width': sideWidth
  });

  $('.brand').click( function() {
    toggleNav();
  });

  $(document).scroll( function() {
    var st = $(document).scrollTop();
    if (st > $('footer').outerHeight()) {
   }
  });


  $(document).ready( function() {
    $('.text').focus();
  });
});

var toggleNav = function() {
  var a = $('body').attr('navOn');
  if (a=='false') {
    $('.nav').fadeIn();
    $('body').attr('navOn', 'true')
  }
  else {
    $('.nav').fadeOut();
    $('body').attr('navOn', 'false')
  }
}