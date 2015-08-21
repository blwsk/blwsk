import React from 'react/addons';
import { Link } from 'react-router';

import ComposeHeader from 'babel!./composeHeader.jsx';
import ComposeBody from 'babel!./composeBody.jsx';

let Compose = React.createClass({

  mixins: [React.addons.LinkedStateMixin],

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
      xhr.open('POST', '/api', true);
    else  // so it has already been saved to Redis store...use PUT
      xhr.open('PUT', '/api', true);
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
    xhr.open('PUT', '/api', true);
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

  getInitialState() {
    return {
      title: "Title...",
      content: '',
      savedContent: '',
      date: Date.now(),
      tags: [],
      exists: false,
      saved: false,
      published: false
    };
  },


  render() {
    return (
      <div className="compose"> 

        <ComposeHeader
          title={this.linkState('title')}
          saved={this.state.saved}
          saveFunc={this.save}
          published={this.state.published}
          publishFunc={this.publish} />

        <ComposeBody 
          title={this.linkState('title')}
          date={this.state.date}
          content={this.linkState('content')}
          unsave={this.unsave} />

      </div>
    );
  }
});

module.exports = Compose;