'use strict';
require('babel-core/register');

var express = require('express');
var compression = require('compression');
var serveStatic = require('serve-static');
var favicon = require('serve-favicon');
var bodyParser = require('body-parser');

var app = express();

app.set('views', './static')
app.set('view engine', 'html');
app.engine('html', require('hbs').__express);

app.use(favicon('static/favicon.ico'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(compression());
app.use(serveStatic('build'));

// sessions
app.use(require('./db').sessionFunc);

// routes
app.use(require('./router'));


var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log('Listening on ' + port);
});
