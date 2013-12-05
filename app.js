var express = require('express');
var app = express();

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


/*
  API
*/
app.get('/api', function(req, res) {
   res.send({name:"Kevin",age:20});
});


app.listen(process.env.PORT || 3000);
console.log('Listening on port 3000');
