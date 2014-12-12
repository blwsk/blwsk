define([
  'jquery',
  'underscore',
  'backbone',
  'react',
  '../collections/items',
  'jsx!/../views/stickyComponent'
], function($, _, Backbone, React, Items, Sticky) {

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
    getInitialState: function() {
      return {navOpen: false};
    },
    toggleMenu: function() {
      if (this.state.navOpen == true) {
        this.setState({navOpen: false});
      } else {
        this.setState({navOpen: true});
      }
    },
    render: function() {
      var cx = React.addons.classSet;
      var classes = cx({
        'nav': true,
        'mobileOpen': this.state.navOpen
      });
      return  <ul className={classes}>
                <li className="branding"><a href="/">Kevin Bielawski</a></li>
                
                <div className="hideOnDesktop">
                  <span className="showMenu" onClick={this.toggleMenu}>Menu</span>
                </div>

                <div className="hideOnMobile">
                  <br></br><br></br>
                  <div className="smallTitle hideOnDesktop">Filters</div>
                  {tags.map( function(tag) {
                    return (
                      <Tag tagName={tag} />
                    );
                  })}
                </div>
              </ul>;
    }
  });

  var Content = React.createClass({
    render: function() {
      return (
        <div className="content">
          <Sticky />
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