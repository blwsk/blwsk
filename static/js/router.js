var $ = require('jquery');
var Backbone = require('backbone');
Backbone.$ = $;


var Side = require('babel!./components/side.jsx');

var Content = require('babel!./components/content.jsx');


module.exports = Backbone.Router.extend({
    
  routes: {
    "":             "home",
    "thoughts":     "thougts",
    "links":        "links",
    "compose":      "compose",
    "post/:item":   "post"
  },

  home: function() {
    //new HomeView;
    new Content;
  },

  links: function() {
    //new LinksView;
  },

  compose: function() {
    //new ComposeView;
  },

  post: function(item) {
    //new PostView({
    //  item: item
    //});
  },

  initialize: function() {
    Backbone.history.start({
      pushState: true,
      root: '/'
    });

    new Side;
  }

});