import React from 'react/addons';
import { Link } from 'react-router';
import ReactMarkdown from 'react-markdown';

import md from '../utils/markdown.js'; // markdown string, temp


const SneakPeek = module.exports = React.createClass({

  render: function() {
    
    return (
      <div className="col sneak-peek">

        <div className="date">August 13, 2015</div>

        <h1><Link to={'/' + this.props.url}>{this.props.title}</Link></h1>

        <ReactMarkdown source={this.props.content} />

        <div className="more">
         <Link to={'/' + this.props.url}>[Read more]</Link>
        </div>
        
        <hr />
      </div>
    );
  }
});