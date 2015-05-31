var express = require('express');
var app = express();

app.use(express.compress());
app.use(express.static(__dirname + '/static'));


// development config
app.configure('development', function() {
  console.log('asdas');
  app.get('*', function(req, res) {
    res.sendfile('static/index.html');
  });
});

// production config
// ...use build/index.html
app.configure('production', function() {
  app.get('*', function(req, res) {
    res.sendfile('static/build/index.html');
  });
});

console.log(app.get('env'));


var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
