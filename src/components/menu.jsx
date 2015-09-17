import React from 'react/addons';

import Nav from './nav.jsx';
import Welcome from './welcome.jsx';
import Latest from './latest.jsx';


const Menu = module.exports = React.createClass({

  loadUser() {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', '/api/is-auth', true);
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
  },

  getInitialState() {
    return {
      //url: window.location.protocol + '//' + window.location.host + '/api/is-auth',
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
