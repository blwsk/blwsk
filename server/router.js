'use strict';
require('babel-core/register');

var express = require('express');
var React = require('react/addons');
var Router = require('react-router');
var routes = require('../src/routes.jsx');

var client = require('./db').client;
var api = require('./api/api');
var auth = require('./api/auth');


var r = express.Router();

r.use( function(req, res, next) {
  next();
});


// api routes

r.get('/api/users', auth.checkAuth, auth.getUsers); // make sure authenticated
r.post('/api/users', auth.checkAuth, auth.createUser); // make sure authenticated
r.get('/api/sessions', auth.getSessions); // make sure authenticated
r.post('/login', auth.login);
r.get('/api/is-auth', auth.isAuthenticated);

r.get('/api/keys', api.getKeys);
r.get('/api/all', api.getAll);
r.get('/api/items', api.getAllItems);
r.get('/api/published', api.getPublishedItems);
r.get('/api/latest', api.getLatestItem);
r.get('/api/items/:url', api.getItemByUrl);
r.post('/api/items', auth.checkAuth, api.postItem); // make sure authenticated
r.put('/api/items', auth.checkAuth, api.putItem); // make sure authenticated
r.delete('/api/delete/:url', auth.checkAuth, api.deleteItem); // make sure authenticated


// react server rendering

r.get('*', function(req, res) {
  var location = req.url;

  var user = {
    username: req.session.username,
    auth: req.session.auth
  };

  Router.run(routes, location, function(Handler) {
    var markup = React.renderToString(<Handler/>);

    res.render('template', {
      title: 'Kevin Bielawski',
      body: markup
    });
  });
  
});


module.exports = r;