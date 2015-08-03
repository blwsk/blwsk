var React = require('react/addons');

var Anchor = React.createClass({
  render: function() {
    return (
      <a href={this.props.href} target="_blank">{this.props.value}</a>
    );
  }
});

module.exports = Anchor;