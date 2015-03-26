var $ = require('jquery');
var Backbone = require('backbone');
Backbone.$ = $;

var Menu = require('babel!./components/menu.jsx');

var HomeView = require('./components/home');
var AboutView = require('./components/about');
var LinksView = require('./components/links');
var ContactView = require('./components/contact');
var ComposeView = require('babel!./components/compose.jsx');
var PostView = require('babel!./components/post.jsx');


module.exports = Backbone.Router.extend({
    
  routes: {
    "":         "home",
    "about":    "about",
    "links":    "links",
    "contact":  "contact",
    "compose":  "compose",
    "post/:item":  "post"
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

  compose: function() {
    new ComposeView;
  },

  post: function(item) {
    new PostView({
      item: item
    });
  },

  initialize: function() {
    Backbone.history.start({
      pushState: true,
      root: '/'
    });
    new Menu;
  }

});