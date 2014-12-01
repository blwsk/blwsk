define([
  'jquery',
  'underscore',
  'backbone',
  '../models/item'
], function($, _, Backbone, Item) {

  var Items = Backbone.Collection.extend({
    model: Item,
    url: 'https://resplendent-fire-7278.firebaseio.com/.json'
  });

  return Items;

});