//var $ = require('jquery');
var React = require('react/addons');
var Link = require('react-router').Link;

var Logo = require('babel!./logo.jsx');
var Latest = require('babel!./latest.jsx');


module.exports = React.createClass({

  render: function() {

    return (
      <nav>
        <div className="col col3 mCol6">
          <div className="logo">
            <Link className="nav-link" activeClassName="current" to="home">
              <Logo />
            </Link>
          </div>
        </div>

        <div className="col col3 mCol6">
          <ul>
            <li><Link className="nav-link" activeClassName="current" to="about">About</Link></li>
            <li><Link className="nav-link" activeClassName="current" to="thoughts">Thoughts</Link></li>
            <li><Link className="nav-link" activeClassName="current" to="links">Links</Link></li>
          </ul>
        </div>

        <div className="col col6 latest mobile-hide">
          <Latest />
        </div>
      </nav>
    );
  }
});
