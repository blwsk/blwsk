import React from 'react/addons';

const Welcome = module.exports = React.createClass({

  render: function() {

    return (
      <div className="welcome">
        Welcome, {this.props.username}
      </div>
    );
  }

});