define([
  'jquery',
  'underscore',
  'backbone'
], function($, _, Backbone) {

  var Item = Backbone.Model.extend({
    defaults: function() {
      return {
        'tag': '',
        'title': '',
        'body': '',
        'raw': '',
        'date': new Date().toString()
      };
    }
  });

  return Item;

});