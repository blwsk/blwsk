define([
  'jquery',
  'underscore',
  'backbone',
  'react',
  'firebase'
], function($, _, Backbone, React, firebase) {


  var todaysDate = new Date().toDateString();

  var ref = new Firebase('https://resplendent-fire-7278.firebaseio.com/');

  //
  //  React components
  //

  var LoginWithFacebook = React.createClass({
    login: function() {
      $('.loginWithFacebook').html('...');
      ref.authWithOAuthPopup('facebook', function(error, authData) {
        if (error) {
          console.log('Login Failed!', error);
        } else {
          location.reload();
          console.log('Authenticated successfully.', authData);
        }
      });
    },
    render: function() {
      return (
        <div className="loginWithFacebook panel">
          <p onClick={this.login}>Login with <span className="facebook">Facebook</span></p>
        </div>
      );
    }
  });

  var Suggested = React.createClass({
    render: function() {
      return (
        <div className="suggested panel">
          <p>Suggested workout for <b>{todaysDate}</b>:</p>
          <ul>
            <li>3x20 minutes at steady state watts</li>
          </ul>
        </div>
      );
    }
  });

  var Workout = React.createClass({
    render: function() {
      return (
            <div className="workout">
              <span className="user"><i>KB</i> Kevin Bielawski</span>
              <span className="text"> earned </span>
              <span className="points">25 points</span>
              <span className="text">: </span>
              <span className="desc">3x20 minute erg</span>
            </div>
      );
    }
  });

  var TrainingContentComponent = React.createClass({
    getInitialState: function() {
      var state = {};
      var authPayload = ref.getAuth();
      if (authPayload == null) {
        state['authed'] = false;
      } else {
        state['authed'] = true;
      }
      return state;
    },
    render: function() {
      var contentJsx;

      //  unauthed
      if (this.state.authed == false) {
        contentJsx = <LoginWithFacebook />;
      } 
      //  authed
      else {
        contentJsx = (
          <div>
            <Suggested />
            <Workout />
          </div>
        );
      }

      return (
        <div className="content">
          <div className="container-900">
            {contentJsx}
          </div>
        </div>
      );
    }
  });

  return TrainingContentComponent;

});