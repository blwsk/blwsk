import React from 'react/addons';
import { State } from 'react-router';
import ReactMarkdown from 'react-markdown';

import dateString from '../utils/dateString.js';

const Post = module.exports = React.createClass({

  mixins: [ State ],

  loadData(url) {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.onload = function() {
      let data = JSON.parse(xhr.responseText);
      console.log(data);
      this.setState({
        date: dateString(data.date),
        title: data.title,
        content: data.content
      });
    }.bind(this);
    xhr.send();
  },

  componentDidMount() {
    let url = this.props.params.url;
    this.loadData('/api/items/' + url);
  },

  getInitialState() {
    return {
      data: [],
      date: '',
      title: '',
      content: ''
    };
  },

  render() {
    
    return (
      <div className="container">
        <div className="col">
          <div className="date">{this.state.date}</div>
          <h1>{this.state.title}</h1>
          <ReactMarkdown source={this.state.content} />
        </div>
      </div>
    );
  }
});