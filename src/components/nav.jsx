//var $ = require('jquery');
var React = require('react/addons');
var Link = require('react-router').Link;

var Logo = require('babel!./logo.jsx');
var Latest = require('babel!./latest.jsx');


module.exports = React.createClass({
  //  uses the following CSS:
  //    a[data-current='true'] {
  //      color: $highlight;
  //    }

  //  this is a fairly convoluted manner of managing current menu tab,
  //  but it worksand isn't 'too' much code

  //  the best part of this is that it doesn't rely on DOM manipulation in the
  //  individual views for each page e.g. about.jsx
  //  - it is all done here

  //  not especially decoupled

  getInitialState: function() {
    //  gets current window url
    var url = window.location.href.toString().split(window.location.host + '/')[1];
    if (url == '')
      url = 'home';
    return {
      home: url == 'home',
      about: url == 'about',
      thoughts: url == 'thoughts',
      links: url == 'links'
    };
  },

  handleClick: function(event) {
    $('.nav-link').each( function() {
      $(this).removeClass('current');
    });
    $(event.target).addClass('current');
    var url = window.location.href.toString().split(window.location.host + '/')[1];
    if (url == '')
      url = 'home';
    this.setState({
      home: url == 'home',
      about: url == 'about',
      thoughts: url == 'thoughts',
      links: url == 'links'
    });
  },
  render: function() {
    var idString = '#' + this.state.url;

    return (
      <nav>
        <div className="col col3">
          <div className="logo">
            {/*
            <Link className="nav-link" data-current={this.state.home} onClick={this.handleClick} to="home">
              <Logo />
            </Link>*/}
            <Link className="nav-link" activeClassName="current" to="home">
              <Logo />
            </Link>
          </div>
        </div>

        <div className="col col3">
          <ul>
            <li><Link className="nav-link" activeClassName="current" to="about">About</Link></li>
            <li><Link className="nav-link" activeClassName="current" to="thoughts">Thoughts</Link></li>
            <li><Link className="nav-link" activeClassName="current" to="links">Links</Link></li>
          </ul>
        </div>

        <div className="col col6 latest">
          <Latest />
        </div>
      </nav>
    );
  }
});
