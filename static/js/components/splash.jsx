var $ = require('jquery');
var Backbone = require('backbone');
Backbone.$ = $;

var React = require('react/addons');

var FullBleed = require('babel!./fullbleed.jsx');

module.exports = React.createClass({
  render: function() {
    return (
      <div className="splash">
        <h1>My name is Kevin Bielawski</h1>
        <p>fsakflmslkam</p>
      </div>
    );
  }
});
