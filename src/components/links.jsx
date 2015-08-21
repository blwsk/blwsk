var React = require('react/addons');
var Link = require('react-router').Link;

var Links = React.createClass({


  render() {
    return (
      <div className="container">
        <div className="col">
          <div className="small">Links</div>
          <ul>
            <li><a href="http://github.com/blwsk" target="_blank">GitHub</a></li>
          </ul>
        </div>
      </div>
    );
  }
});

module.exports = Links;