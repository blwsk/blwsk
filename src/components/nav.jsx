import React from 'react/addons';
import { Link, Navigation } from 'react-router';

import Logo from 'babel!./logo.jsx';


const Nav = module.exports = React.createClass({

  mixins: [Navigation],

  doCompose(e) {
    e.preventDefault();
    this.transitionTo('compose');
  },

  render: function() {

    let composeNode = [];

    if (this.props.user.auth) {
      composeNode = (
        <li>
          <Link to="compose" onClick={this.doCompose}>Compose</Link>
        </li>
      );
    }

    return (
      <nav className="nav">

        {/* LEFT */}
        <div className="logo left">
          <Link activeClassName="current" to="home">
            <Logo />
          </Link>
        </div>

        {/* RIGHT */}
        <div className="right">
          <ul>
            <li><Link activeClassName="current" to="about">About</Link></li>
            <li><Link activeClassName="current" to="activity">Activity</Link></li>
            <li><Link activeClassName="current" to="links">Links</Link></li>
            {composeNode}
          </ul>
        </div>
      </nav>
    );
  }
});
