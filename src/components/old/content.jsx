var React = require('react/addons');
var ReactMarkdown = require('react-markdown');

//var createNodes = require('babel!../utils/createNodes.jsx');

var md = require('../utils/markdown.js'); // markdown string

var Content = React.createClass({
  render: function() {
    var contentNodes = createNodes(this.props.data);
    
    return (
      <div className="container">
        <div className="row">
          <div className="col col3">
            <div className="date">July 15, 2015</div>
          </div>

          <div className="col col6">
            <ReactMarkdown source={md} />
          </div>
        </div>
      </div>
    );
  }
});

module.exports = Content;