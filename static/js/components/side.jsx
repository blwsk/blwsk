var $ = require('jquery');
var Backbone = require('backbone');
Backbone.$ = $;

var React = require('react/addons');

var Position = require('babel!./position.jsx');
var Nav = require('babel!./nav.jsx');

var Menu = React.createClass({
  getInitialState: function() {
    return {menuOpen: false};
  },
  /*
    this.setState({menuOpen: !this.state.menuOpen});
  */
  render: function() {
    return (
      <div className="wrapper">
        <Position />
        <Nav />
      </div>
    );
  }
});

module.exports = Backbone.View.extend({
  el: $('.side'),
  initialize: function() {
    this.render();
  },
  render: function() {
    React.render(<Menu />, this.el);
  }
});



