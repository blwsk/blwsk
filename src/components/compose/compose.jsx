import React from 'react/addons';
import Router from 'react-router';
import { Link } from 'react-router';

import ComposeMenu from 'babel!./composeMenu.jsx';
import ComposeBody from 'babel!./composeBody.jsx';

import fetchData from '../../utils/fetchData';
import dateString from '../../utils/dateString';


let Compose = React.createClass({

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

  loadPost() {
    let path = this.props.params.url;
    if (typeof path === 'undefined' || path === null) {
      // this must be the /compose route, not /compose/:url
    }
    else {
      fetchData('/api/items/' + path, function(data) {
        this.setState({
          title: data.title,
          content: data.content,
          date: dateString(data.date),
          exists: true
        });
      }.bind(this));

      //remember to check for [] ...does not exist
    }
  },

  newPost() {
    // disabled for now
    console.log('new');
  },

  unsave() {
    // used when changes are made that are
    // not reflected in the content string (saved version)
    if (this.state.content != this.state.savedContent) {
      this.setState({
        saved: false
      });
    }
  },

  save() {
    // create object
    let i = {
      title: this.state.title,
      content: this.state.content,
      date: this.state.date,
      published: this.state.published
    };

    // does it already exist?
    let e = false;

    // do save via xhr...
    let xhr = new XMLHttpRequest();
    if (!this.state.exists) // check to see if it has been saved to Redis yet...if not, POST
      xhr.open('POST', this.state.url, true);
    else  // so it has already been saved to Redis store...use PUT
      xhr.open('PUT', this.state.url, true);
    // header
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.onreadystatechange = function() {
      if (xhr.readyState == 4 && xhr.status == 200) {
        //console.log(xhr.responseText);
        e = true;
      }
    }

    // send json
    xhr.send(JSON.stringify(i));
    this.setState({
      savedContent: this.state.content,
      saved: true,
      exists: e
    });
  },

  publish() {
    // save the post
    this.save();

    let publishedState = true;
    
    // create the object
    let i = {
      title: this.state.title,
      content: this.state.content,
      date: this.state.date,
      published: publishedState
    };

    // publish with {published: true} to Redis store
    let xhr = new XMLHttpRequest();
    xhr.open('PUT', this.state.url, true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.onreadystatechange = function() {
      if (xhr.readyState == 4 && xhr.status == 200)
        console.log(xhr.responseText);
    }
    xhr.send(JSON.stringify(i));

    // set state
    this.setState({
      published: publishedState
    });
  },

  delete() {

    let xhr = new XMLHttpRequest();
    xhr.open('DELETE', '/api/delete/' + this.props.params.url, true);
    xhr.onload = function() {
      let data = xhr.responseText;
      console.log(data);
    }.bind(this);
    xhr.send();

  },

  getInitialState() {
    return {
      title: "Title...",
      content: '',
      savedContent: '',
      date: Date.now(),
      tags: [],
      exists: false,
      saved: false,
      published: false,
      url: '/api/items',
      user: []
    };
  },

  componentDidMount() {
    this.loadUser();
    this.loadPost();
  },


  render() {

    return (
      <div className="compose"> 

        <ComposeMenu
          title={this.linkState('title')}
          saved={this.state.saved}
          saveFunc={this.save}
          published={this.state.published}
          publishFunc={this.publish}
          user={this.state.user} />

        <ComposeBody 
          title={this.linkState('title')}
          date={this.state.date}
          content={this.linkState('content')}
          unsave={this.unsave}
          user={this.state.user}
          delete={this.delete} />

      </div>
    );
  }
});

module.exports = Compose;