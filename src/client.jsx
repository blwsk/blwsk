var React = require('react/addons');
var Router = require('react-router');

// Router
var routes = require('./routes.jsx');

Router.run(routes, Router.HistoryLocation, function (Handler) {
  React.render(<Handler/>, document.getElementById('application'));
});