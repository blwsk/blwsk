var express = require('express');
var app = express();
app.use(express.logger());

/*
  Load static files
*/
app.use(express.compress());
app.use(express.static(__dirname + '/views'));


/*
  Handlebars template engine
*/
var hbs = require('hbs');
app.set('view engine', 'html');
app.engine('html', require('hbs').__express);


/*
  views
*/
app.get('/', function(req, res) {
  res.render('index');
});

app.get('/about', function(req, res) {
  res.render('about');
});

app.get('/projects', function(req, res) {
  res.render('projects');
});

app.get('/lottery', function(req, res) {
  res.render('lottery-solver');
});


/*
  API
*/
app.get('/api', function(req, res) {
   res.send({name:"Kevin",age:20});
});


var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
