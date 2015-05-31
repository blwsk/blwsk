var $ = require('jquery');
var Backbone = require('backbone');
Backbone.$ = $;

var React = require('react/addons');

var Article = require('babel!./article.jsx');
var Splash = require('babel!./splash.jsx');

var Content = React.createClass({
  /*
  getInitialState: function() {
    return {menuOpen: false};
  },
  */
  /*
    <Article />
  */
  render: function() {
    return (
      <div className="wrapper">
        <Splash />
      </div>
    );
  }
});

module.exports = Backbone.View.extend({
  el: $('.content'),
  initialize: function() {
    this.render();
  },
  render: function() {
    React.render(<Content />, this.el);
  }
});
