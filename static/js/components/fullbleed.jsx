var $ = require('jquery');
var Backbone = require('backbone');
Backbone.$ = $;

var React = require('react/addons');

module.exports = React.createClass({
  render: function() {
    return (
      <section className="content-article-info full-bleed">
        <div className="article-heading">Article heading</div>
        <div className="article-date">25 Apr 2015</div>
      </section>
    );
  }
});
