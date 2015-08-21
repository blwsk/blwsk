import React from 'react/addons';
import Router from 'react-router';
import { Link } from 'react-router';

let Files = React.createClass({

  current(url) {
    this.setState({
      current: url
    });
  },

  nodes() {
    let data = this.props.fileData;

    let linksPub = [];
    let linksSav = [];

    data.map( function(datum) {
      if (datum.published) {
        linksPub.push(
          <li className="list-item" key={datum.id}>
            <a href={'/compose/' + datum.url}>{datum.title}</a>
          </li>
        );
      }
      else {
        linksSav.push(
          <li className="list-item" key={datum.id}>
            <a href={'/compose/' + datum.url}>{datum.title}</a>
          </li>
        );
      }
    }.bind(this));

    return [linksPub, linksSav];
  },

  getInitialState() {
    return {
      current: ''
    };
  },

  render() {
    let nodes = this.nodes(this.props.fileData);

    return (
      <div className="file-tray">
        <ul>
          <li className="list-sub">Published</li>
          {nodes[0]}
        </ul>
        <ul>
          <li className="list-sub">Saved</li>
          {nodes[1]}
        </ul>
      </div>
    );
  }
});

module.exports = Files;