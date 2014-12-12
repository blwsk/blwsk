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
var routes  = require('./routes/routes');
app.get('/', routes.index);
app.get('/wiki', routes.wiki)
app.get('/training', routes.training);
app.get('/login', routes.login);
app.get('/api', routes.api);
app.get('/search', routes.search)
app.get('/search/:query', routes.results);


var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
