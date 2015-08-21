import React from 'react/addons';
import Router from 'react-router';
const RouteHandler = Router.RouteHandler;

const Menu = require('babel!./components/menu.jsx');


const App = module.exports = React.createClass({

  render: function() {
    return (
      <div className="application">
        <Menu />
        <RouteHandler />
      </div>
    );
  }
});
