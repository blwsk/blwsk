var express = require('express'),
    exphbs  = require('express3-handlebars'), // "express3-handlebars"
    app = express();

/*
  Load static files
*/
app.use(express.compress());
app.use(express.static(__dirname + '/views'));


/*
  Handlebars template engine
*/
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');


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
  res.render('lottery');
});

app.get('/erg', function(req, res) {
  res.render('erg');
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
