var React = require('react/addons');
var Router = require('react-router');
var Route = Router.Route;
var History = Router.HistoryLocation;

var App = require('./app.jsx');
var Home = require('./components/home.jsx');
var About = require('./components/about.jsx');
var Links = require('./components/links.jsx');
var Login = require('./components/login.jsx');
var Post = require('./components/post.jsx');
var Compose = require('./components/compose/compose.jsx');
var Gallery = require('./components/photos/gallery.jsx');
var Splash = require('./components/splash/splash.jsx');
var New = require('./components/new/new.jsx');

var routes = module.exports = (
  <Route>
    <Route name="compose" path="/compose" handler={Compose} />
    <Route name="edit" path="/compose/:url" handler={Compose} />

    <Route name="photos" path="/photos" handler={Gallery} />

    <Route name="splash" path="/splash" handler={Splash} />

    <Route name="new" path="/new" handler={New} />

    <Route handler={App}>
      <Route name="home" path="/" handler={Home} />
      <Route name="about" handler={About} />
      <Route name="activity" handler={About} />
      <Route name="links" handler={Links} />
      <Route name="login" handler={Login} />
      <Route name="post" path="/:url" handler={Post} />
    </Route>

  </Route>
);
