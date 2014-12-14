define([
  'jquery',
  'underscore',
  'backbone',
  'react',
  'firebase'
], function($, _, Backbone, React, firebase) {

  var ref = new Firebase('https://resplendent-fire-7278.firebaseio.com/');

  //
  //  React components
  //
  var TrainingNavComponent = React.createClass({
    getInitialState: function() {
      var state = {menuOpen:false};
      var authPayload = ref.getAuth();
      if (authPayload == null) {
        state['authed'] = false;
      } else {
        state['authed'] = true;
      }
      return state;
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

    login: function() {
      ref.authWithOAuthPopup('facebook', function(error, authData) {
        if (error) {
          console.log('Login Failed!', error);
        } else {
          console.log('Authenticated successfully.', authData);
        }
      });
      this.closeMenu();
    },
    logout: function() {
      ref.unauth();
      this.closeMenu();
      location.reload();
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

      var menuJsx = '';
      if (this.state.authed == true) {
        menuJsx = (
          <div>
            <li className="menu hideOnDesktop" onClick={this.toggleMenu}>Menu</li>
            <br className="hideOnDesktop"></br>
            <div className="links">
              <li className="feed" onClick={this.feed}>Feed</li>
              <li className="game" onClick={this.game}>Game</li>
              <li className="your" onClick={this.your}>Your workouts</li>
              <li className="auth" onClick={this.logout}>Logout</li>
            </div>
          </div>
        );
      }

      return (
        <div className={classes}>
          <div className="container container-900">
            <ul>
              <li className="brand bcvm" onClick={this.bcvm}>BCVM Winter Training</li>
              {menuJsx}
            </ul>
          </div>
        </div>
      );
    }
  });

  return TrainingNavComponent;

});