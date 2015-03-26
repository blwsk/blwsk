var $ = require('jquery');
var Backbone = require('backbone');
Backbone.$ = $;

var React = require('react/addons');

var Compose = React.createClass({
  getDate: function() {
    var date = new Date();
    return date.toDateString();
  },
  render: function() {
    return (
      <div className="compose">
        <div className="container">
          <div className="compose-title" contentEditable>Title</div>
          <div className="compose-date">{this.getDate()}</div>
        </div>
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
    React.render(<Compose />, this.el);
  }
});