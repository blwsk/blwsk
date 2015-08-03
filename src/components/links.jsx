var React = require('react/addons');
var Link = require('react-router').Link;

var Links = React.createClass({


  render() {
    return (
      <div className="content">
        <div className="container">
          <div className="row">
            <div className="col col3">
              <div className="side">Links</div>
            </div>

            <div className="col col9">
              <ul>
                <li><a href="http://github.com/blwsk" target="_blank">GitHub</a></li>
                <li><Link to="compose">Compose</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = Links;