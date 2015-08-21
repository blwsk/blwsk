import React from 'react/addons';

import Post from 'babel!./post.jsx';
import SneakPeek from 'babel!./sneakPeek.jsx';

//
//  Load stream of posts rendered in SneakPeek nodes
//

const Home = module.exports = React.createClass({

  loadData() {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', '/api/published', true);
    xhr.onload = function() {
      let data = JSON.parse(xhr.responseText);
      this.setState({
        data: data
      });
    }.bind(this);
    xhr.send();
  },

  componentDidMount() {
    // load data...
    this.loadData();
  },

  getInitialState() {
    return {
      data: []
    };
  },

  render() {

    let nodes = this.state.data.map( function(item) {
      return (
        <SneakPeek title={item.title} content={item.content} url={item.url} />
      );
    });


    return (
      <div className="container">
        {nodes}
      </div>
    );
  }
});