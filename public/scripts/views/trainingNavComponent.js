define([
  'jquery',
  'underscore',
  'backbone',
  'react'
], function($, _, Backbone, React) {

  //
  //  React components
  //
  var TrainingNavComponent = React.createClass({
    getInitialState: function() {
      return {menuOpen: false};
    },

    //
    //  menu states
    //
    toggleMenu: function() {
      if (this.state.menuOpen == true) {
        this.setState({menuOpen: false});
        $('.menu').html('Menu');
      } else {
        this.setState({menuOpen: true});
        $('.menu').html('Close');
      }
    },
    closeMenu: function() {
      this.setState({menuOpen: false});
      $('.menu').html('Menu');
    },


    //
    //  pages
    //
    bcvm: function() {
      this.closeMenu();
    },
    feed: function() {
      this.closeMenu();
    },
    game: function() {
      this.closeMenu();
    },
    your: function() {
      this.closeMenu();
    },
    auth: function() {
      this.closeMenu();
    },


    //
    //  render
    //
    render: function() {
      var cx = React.addons.classSet;
      var classes = cx({
        'nav': true,
        'menuOpen': this.state.menuOpen
      });
      return (
        <div className={classes}>
          <div className="container container-900">
            <ul>
              <li className="brand bcvm" onClick={this.bcvm}>BCVM Winter Training</li>
              <li className="menu hideOnDesktop" onClick={this.toggleMenu}>Menu</li>
              <br className="hideOnDesktop"></br>
              <div className="menuItems">
                <li className="link feed" onClick={this.feed}>Feed</li>
                <li className="link game" onClick={this.game}>Game</li>
                <li className="link your" onClick={this.your}>Your workouts</li>
                <li className="link auth" onClick={this.auth}>Logout</li>
              </div>
            </ul>
          </div>
        </div>
      );
    }
  });

  return TrainingNavComponent;

});