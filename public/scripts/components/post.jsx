var $ = require('jquery');
var Backbone = require('backbone');
Backbone.$ = $;

var React = require('react/addons');

var Post = React.createClass({
  getDefaultProps: function() {
    return {
      item: 0
    };
  },
  render: function() {
    return (
      <div className="post">
        {this.props.item}
      </div>
    );
  }
});

module.exports = Backbone.View.extend({
  el: $('.content'),
  initialize: function(param) {
    this.item = param.item;
    this.render();
  },
  render: function() {
    $(function() {
      $('.menu-item').removeClass('current');
    });
    //React.render(<Post item={this.item} />, this.el);
    var url = '../media/post/' + this.item + '.html';
    $.ajax(url).done( function(data) {
      $('.content').html(data);
    });
  }
});