import React from 'react/addons';
import { Link } from 'react-router';
import ReactMarkdown from 'react-markdown';

import dateString from '../utils/dateString';

const SneakPeek = module.exports = React.createClass({

  render: function() {
    
    return (
      <div className="col sneak-peek">

        <div className="date">{dateString(this.props.date)}</div>

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