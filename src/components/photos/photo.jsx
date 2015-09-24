import React from 'react/addons';
import Router from 'react-router';
import { Link } from 'react-router';

import fetchData from '../../utils/fetchData';
import dateString from '../../utils/dateString';


let Photo = React.createClass({

  mixins: [React.addons.LinkedStateMixin],

  getInitialState() {
    return {};
  },

  componentDidMount() {},

  render() {
    let photoStyle = {
      //background: 'url(' + this.props.src + ') no-repeat center' 
    };

    return (
      <div className="photo" style={photoStyle}>
        <img src={this.props.src} />
      </div>
    );
  }
});

module.exports = Photo;
