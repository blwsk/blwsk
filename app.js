var express = require('express');
var app = express();

//  
//  static files
//  
app.use(express.compress());
app.use(express.static(__dirname + '/public'));


//  
//  routes
//  
var routes  = require('./routes/main');
app.get('/', routes.index);
app.get('/api', routes.api);


var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
