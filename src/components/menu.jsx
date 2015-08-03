var React = require('react/addons');

var Nav = require('babel!./nav.jsx');

var Menu = React.createClass({
  getInitialState: function() {
    return {menuOpen: false};
  },
  render: function() {
    return (
      <div className="menu-wrapper">
        <div className="container">
          <div className="row">
            <Nav />
          </div>
        </div>
      </div>
    );
  }
});


module.exports = Menu;