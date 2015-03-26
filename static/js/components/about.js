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
      $('.about').addClass('current');
    });
    $.ajax('../../media/about.html').done( function(data) {
      $('.content').html(data);
    });
  }
});