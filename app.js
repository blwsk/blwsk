var express = require('express');
var app = express();


// development config
app.configure('development', function() {
  // static files
  app.use(express.compress());
  app.use(express.static(__dirname + '/static'));

  app.get('*', function(req, res) {
    res.sendfile('static/index.html');
  });
});


// production config
app.configure('production', function() {
  app.get('*', function(req, res) {
    res.sendfile('static/build/index.html');
  });
});


var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
