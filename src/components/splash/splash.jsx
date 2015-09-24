import React from 'react/addons';
import { Link, Navigation } from 'react-router';

import Logo from '../logo.jsx';


const Splash = module.exports = React.createClass({

  render: function() {

    let splashStyle = {
      background: 'blue'
    };

    return (
      <div className="splash" style={splashStyle}>
        <Logo scale={10} />
      </div>
    );
  }
});
