var $ = require('jquery');
var Backbone = require('backbone');
Backbone.$ = $;

module.exports = Backbone.View.extend({
  initialize: function() {
    this.render();
  },
  render: function() {
    $(function() {
      $('.menu-item').removeClass('current');
      $('.home').addClass('current');
    });
    $.ajax('../../media/home.html').done( function(data) {
      $('.content').html(data);
    });
  }
});