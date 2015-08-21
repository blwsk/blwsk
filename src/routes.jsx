var React = require('react/addons');
var Router = require('react-router');
var Route = Router.Route;
var History = Router.HistoryLocation;

var App = require('babel!./app.jsx');
var Home = require('babel!./components/home.jsx');
var About = require('babel!./components/about.jsx');
var Links = require('babel!./components/links.jsx');
var Login = require('babel!./components/login.jsx');
var Post = require('babel!./components/post.jsx');
var Compose = require('babel!./components/compose/compose.jsx');

var routes = module.exports = [
  <Route>
    <Route name="compose" path="/compose" handler={Compose} />
    <Route name="edit" path="/compose/:url" handler={Compose} />

    <Route handler={App}>
      <Route name="home" path="/" handler={Home} />
      <Route name="about" handler={About} />
      <Route name="activity" handler={About} />
      <Route name="links" handler={Links} />
      <Route name="login" handler={Login} />
      <Route name="post" path="/:url" handler={Post} />
    </Route>

  </Route>
];
