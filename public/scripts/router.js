var $ = require('jquery');
var Backbone = require('backbone');
Backbone.$ = $;

var Menu = require('./components/menu.jsx');

var HomeView = require('./components/home');
var AboutView = require('./components/about');
var LinksView = require('./components/links');
var ContactView = require('./components/contact');

module.exports = Backbone.Router.extend({
    
  routes: {
    "":         "home",
    "about":    "about",
    "links":    "links",
    "contact":  "contact"
  },

  home: function() {
    new HomeView;
  },

  about: function() {
    new AboutView;
  },

  links: function() {
    new LinksView;
  },

  contact: function() {
    new ContactView;
  },

  initialize: function() {
    Backbone.history.start({pushState: true});
    new Menu;
  }

});