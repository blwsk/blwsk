
(function( $ ){

  $('.erg').click( function() {
    ergCloseAll();
    $('.erg').css('background','rgb(235,237,239)');
    $('#erg').css('display', 'block');
  });
  $('.run').click( function() {
    ergCloseAll();
    $('.run').css('background','rgb(235,237,239)');
    $('#run').css('display', 'block');
  });
  $('.stairs').click( function() {
    ergCloseAll();
    $('.stairs').css('background','rgb(235,237,239)');
    $('#stairs').css('display', 'block');
  });
  $('.lift').click( function() {
    ergCloseAll();
    $('.lift').css('background','rgb(235,237,239)');
    $('#lift').css('display', 'block');
  });

})( jQuery );

var ergCloseAll = function() {
  $('.type-focus').css('display', 'none');
  $('.option').css('background','rgb(245,247,249)');
}