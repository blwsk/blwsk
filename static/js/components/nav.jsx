var $ = require('jquery');
var Backbone = require('backbone');
Backbone.$ = $;

var React = require('react/addons');

module.exports = React.createClass({
  handleClick: function(event) {
    $('.nav-link').each( function() {
      $(this).removeClass('nav-link-current');
    });
    $(event.target).addClass('nav-link-current');
  },
  render: function() {
    return (
      <nav>
        <ul>
          <li><a onClick={this.handleClick} className="nav-link nav-link-current bold"  href="/">Kevin Bielawski</a></li>
          <li><a onClick={this.handleClick} className="nav-link"  href="/thoughts">Thoughts</a></li>
          <li><a onClick={this.handleClick}  className="nav-link"  href="/links">Links</a></li>
        </ul>
      </nav>
    );
  }
});
