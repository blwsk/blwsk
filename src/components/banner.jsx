var React = require('react/addons');

var createNodes = require('babel!../utils/createNodes.jsx');

var Banner = React.createClass({
  render: function() {
    var contentNodes = createNodes(this.props.data);

    return (
      <div className="container">
        <div className="row">
          <div className="col col3">
            <div className="side side-banner">Welcome</div>
          </div>

          <div className="col col9">
            <div className="banner">{contentNodes}</div>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = Banner;