var express = require('express');

// express middleware
var compression = require('compression');
var serveStatic = require('serve-static')

var app = express();


// development config
if ('development' == app.get('env')) {
  app.use(compression());
  app.use(serveStatic(__dirname + '/static'));

  app.get('*', function(req, res) {
    res.sendfile('static/index.html');
  });
}

// production config
else if ('production' == app.get('env')) {
  app.get('*', function(req, res) {
    res.sendfile('static/build/index.html');
  });
}


var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
