var express = require('express'),
    exphbs  = require('express3-handlebars'),
    routes  = require('./routes/index');
    app = express();

//  
//  static files
//  
app.use(express.compress());
app.use(express.static(__dirname + '/public'));


//  
//  routes
//  
app.get('*', routes.index);


var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
