var express = require('express');

// express middleware
var compression = require('compression');
var serveStatic = require('serve-static');
var favicon = require('serve-favicon');
var bodyParser = require('body-parser');
var multer = require('multer'); 
var path = require('path');

var app = express();

app.use(favicon('static/media/favicon.ico'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(multer());


// api
var routes = require('./routes');
app.get('/api', routes.getAll);
app.get('/api/item/:id', routes.getItem);
app.post('/api/item', routes.postItem);


// development config
if ('development' == app.get('env')) {
  app.use(compression());
  app.use(serveStatic('static'));

  app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, '../static', 'index.html'));
  });
}

// production config
else if ('production' == app.get('env')) {
  app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, '../static/build', 'index.html'));
  });
}


var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log('Listening on ' + port);
});
