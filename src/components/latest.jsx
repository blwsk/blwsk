var $ = require('jquery');
var Backbone = require('backbone');
Backbone.$ = $;

var React = require('react/addons');

module.exports = React.createClass({
  render: function() {
    return (
    	<div className="wrapper">
      	<h4>Latest:</h4>
        <ul>
          <li><a href="#">Summer training and racing recap</a><span>July 27, 2015</span></li>
          <li><a href="#">My gulpfile</a><span>July 26, 2015</span></li>
        </ul>
      </div>
    );
  }
});