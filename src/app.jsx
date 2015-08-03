var React = require('react/addons');
var Router = require('react-router');
var Route = Router.Route;
var Link = Router.Link;
var RouteHandler = Router.RouteHandler;
var History = Router.HistoryLocation;

// Components
var Menu = require('babel!./components/menu.jsx');
var Home = require('babel!./components/home.jsx');
var About = require('babel!./components/about.jsx');
var Links = require('babel!./components/links.jsx');
var Compose = require('babel!./components/compose/compose.jsx');

var App = React.createClass({
  render: function() {
    return (
      <div className="application">
        <Menu />
        <RouteHandler/>
      </div>
    );
  }
});

// Routes
var routes = [
  <Route>
    <Route handler={App}>
      <Route name="home" path="/" handler={Home} />
      <Route name="about" handler={About} />
      <Route name="thoughts" handler={About} />
      <Route name="links" handler={Links} />
    </Route>

    {/* routes without Menu */}
    <Route name="compose" handler={Compose} />

  </Route>
];

// Router
Router.run(routes, History, function (Handler) {
  React.render(<Handler/>, document.body);
});