var React = require('react/addons');
var Router = require('react-router');
var History = Router.HistoryLocation;

// Router
var routes = require('babel!./routes.jsx');

Router.run(routes, History, function (Handler) {
  React.render(<Handler/>, document.body);
});