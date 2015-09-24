import React from 'react/addons';
import Router from 'react-router';
import { Link } from 'react-router';

import fetchData from '../../utils/fetchData';
import dateString from '../../utils/dateString';

import Photo from './photo.jsx';


let Gallery = React.createClass({

  mixins: [React.addons.LinkedStateMixin],

  loadUser() {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', '/api/is-auth', true);
    xhr.onload = function() {
      let data = JSON.parse(xhr.responseText);
      if (typeof data.auth === 'undefined') {
        // not auth'd
        window.location = '/';
      }
      this.setState({
        user: data
      });
    }.bind(this);
    xhr.send();
  },

  loadPhotos() {
    let path = this.props.params.url;
    if (typeof path === 'undefined' || path === null) {
      // this must be the /compose route, not /compose/:url
    }
    else {
      fetchData('/api/items/' + path, function(data) {
        this.setState({
          title: data.title,
          content: data.content,
          date: data.date,
          exists: true
        });
      }.bind(this));

      //remember to check for [] ...does not exist
    }
  },

  getInitialState() {
    return {

    };
  },

  componentDidMount() {
    this.loadUser();
    this.loadPhotos();

    this.setState({
      windowWidth: window.innerWidth
    });
  },

  render() {

    let data = [
      'http://static.specialized.com/media/super_categories/_DSC2597-2_web.jpg',
      'http://static.specialized.com/media/sections/AllezSprint_Header.jpg',
      'http://static.specialized.com/media/sections/CER_2216-2_web.jpg',
      'http://static.specialized.com/media/sections/sj_1.jpg',
      'http://static.specialized.com/media/sections/BQ1P8167_web.jpg',
      'http://static.specialized.com/media/sections/5Mins_Venge_Lander1024x442.jpg',
      'http://static.specialized.com/media/sections/20150307_BrakeThroughMedia_JD4_8657_web.jpg'
    ];

    let photos = data.map( function(url) {
      console.log(url);
      return <Photo src={url} caption="" />;
    });
    

    return (
      <div className="gallery">

       {photos}

      </div>
    );
  }
});

module.exports = Gallery;
