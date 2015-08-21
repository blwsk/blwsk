import React from 'react/addons';
import { Link } from 'react-router';

const Latest = module.exports = React.createClass({

  componentDidMount() {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', '/api/latest', true);
    xhr.onload = function() {
      let data = JSON.parse(xhr.responseText);
      this.setState({
        title: data.title,
        url: '/' + data.url
      });
    }.bind(this);
    xhr.send();
  },

  getInitialState() {
    return {
      title: '',
      url: '/'
    };
  },

  render: function() {
    return (
    	<div className="latest">
      	<h3>Latest:</h3>
        <Link to={this.state.url}>
          {this.state.title}
        </Link>
      </div>
    );
  }
});