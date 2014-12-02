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
  var activeFilters = [];
  var Tag = React.createClass({
    getInitialState: function() {
      return {selected: false};
    },
    doFilter: function() {
      var i = activeFilters.indexOf(this.props.tagName);
      if (i > -1) { //  remove filter
        activeFilters.splice(i, 1);
        this.setState({selected: false});
      }
      else {  //  add filter
        activeFilters.push(this.props.tagName);
        this.setState({selected: true});
      }
    },
    render: function() {
      // need to apply header-tag-selected class
      var cx = React.addons.classSet;
      var classes = cx({
        'header-tag': true,
        'header-tag-selected': this.state.selected
      });

      return (
        <li className={classes} onClick={this.doFilter}>
          <span>{this.props.tagName}</span>
        </li>
      );
    }
  });
  var Nav = React.createClass({
    render: function() {
      return  <ul className="nav">
                <li className="branding"><a href="/">Kevin Bielawski</a></li>
                {tags.map( function(tag) {
                  return (
                    <Tag tagName={tag} />
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