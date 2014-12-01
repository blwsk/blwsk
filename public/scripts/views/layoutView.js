define([
  'jquery',
  'underscore',
  'backbone',
  'react',
  '../collections/items'
], function($, _, Backbone, React, Items) {

  //
  //  React components
  //

  var tags = ['General', 'Links', 'Music', 'Workouts', 'Thoughts', 'Articles'];
  var Nav = React.createClass({
    render: function() {
      return  <ul className="nav">
                <li className="branding"><a href="">Kevin Bielawski</a></li>
                {tags.map( function(tag) {
                  return (
                    <li className="header-link" type={tag.toLowerCase()}>
                      <a href="">{tag}</a>
                    </li>
                  );
                })}
              </ul>;
    }
  });

  var Content = React.createClass({
    render: function() {
      return (
        <div className="content">
          <p>Messing around with some Backbone and React components - very clearly a W-I-P</p>
        </div>
      );
    }
  });

  var Layout = React.createClass({
    render: function() {
      return (
        <div className="layout">
          <Nav />
          <Content />
        </div>
      );
    }
  });

  //
  //  Backbone view
  //
  var LayoutView = Backbone.View.extend({
    el: $('body'),
    initialize: function() {
      this.render();
    },
    render: function() {
      var items = new Items();
      var json = items.toJSON();
      console.log(json);
      React.render(<Layout />, this.el);
    }
  });

  return LayoutView;

});