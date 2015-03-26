var $ = require('jquery');
var Backbone = require('backbone');
Backbone.$ = $;

var React = require('react/addons');

var Menu = React.createClass({
  getInitialState: function() {
    return {menuOpen: false};
  },
  toggleMenu: function(event) {
    $('.menu-items').toggleClass('mobile-menu-open');
    //  button state
    if (!this.state.menuOpen) {
      $('.mobile-button').removeClass('mobile-button-open');
      $('.mobile-button').addClass('mobile-button-close');
      $('.menu-item').slideDown(200);
      $('.mask').fadeIn(200);
    } else {
      $('.mobile-button').removeClass('mobile-button-close');
      $('.mobile-button').addClass('mobile-button-open');
      $('.menu-item').slideUp(200);
      $('.mask').fadeOut(200);
    }
    this.setState({menuOpen: !this.state.menuOpen});
  },
  closeMenu: function() {
    if (this.state.menuOpen) {
      $('.menu-items').removeClass('mobile-menu-open');
      $('.mobile-button').removeClass('mobile-button-close');
      $('.mobile-button').addClass('mobile-button-open');
      $('.menu-item').slideUp(200);
      $('.mask').fadeOut(200);
      this.setState({menuOpen: !this.state.menuOpen});
    }
  },
  render: function() {
    return (
      <div className="menu-items container">
        <div className="kevin" onClick={this.closeMenu}><a href="/">Kevin Bielawski</a></div>
        <div className="mobile-button mobile-button-open" onClick={this.toggleMenu}></div>
        <div className="menu-divider"></div>
        <div className="menu-item home current" onClick={this.closeMenu}><a href="/">Home</a></div>
        <div className="menu-item about" onClick={this.closeMenu}><a href="/about">About me</a></div>
        <div className="menu-item links" onClick={this.closeMenu}><a href="/links">Links</a></div>
        <div className="menu-item contact" onClick={this.closeMenu}><a href="/contact">Contact</a></div>
      </div>
    );
  }
});

module.exports = Backbone.View.extend({
  el: $('.menu'),
  initialize: function() {
    this.render();
  },
  render: function() {
    React.render(<Menu />, this.el);
  }
});



