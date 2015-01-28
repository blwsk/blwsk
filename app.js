var express = require('express');
var app = express();

app.use(express.compress());
app.use(express.static(__dirname + '/public'));


//  
//  routes
//  
var routes  = require('./routes/routes');
app.get('/api', routes.api);
app.get('*', routes.index);


var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
