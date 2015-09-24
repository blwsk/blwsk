import React from 'react/addons';
import { State } from 'react-router';
import ReactMarkdown from 'react-markdown';

import Post from './post.jsx';

const Links = module.exports = React.createClass({

  render() {
    
    return (
      <Post url="links" />
    );
  }
});