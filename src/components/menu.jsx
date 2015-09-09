import React from 'react/addons';

import Nav from 'babel!./nav.jsx';
import Welcome from 'babel!./welcome.jsx';
import Latest from 'babel!./latest.jsx';


const Menu = module.exports = React.createClass({

  loadUser() {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', this.state.url, true);
    xhr.onload = function() {
      let data = JSON.parse(xhr.responseText);
      this.setState({
        user: data
      });
    }.bind(this);
    xhr.send();
  },

  componentDidMount() {
    this.loadUser();
    var a = new Promise( function() {});
  },

  getInitialState() {
    return {
      url: window.location.protocol + '//' + window.location.host + '/api/is-auth',
      user: []
    };
  },

  render: function() {

    return (
      <div className="menu">
        <Nav user={this.state.user} />
        <Latest />
      </div>
    );
  }

});
