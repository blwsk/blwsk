var express = require('express');
var app = express();

var path = require('path');
var url = require('url');
var fs = require('fs');

var handlebars = require('handlebars');
var template = fs.readFileSync(path
  .join(__dirname, '../static', 'template.html'), 'utf8');
var html = handlebars.compile(template);

// middleware
var compression = require('compression');
var serveStatic = require('serve-static');
var favicon = require('serve-favicon');
var bodyParser = require('body-parser');
var multer = require('multer'); 
var redis = require('redis');
var session = require('express-session');
var RedisStore = require('connect-redis')(session);

// middleware
app.use(favicon('static/media/favicon.ico'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(multer());
app.use(compression());
app.use(serveStatic('static'));

// redis client
var redisURL = url.parse(process.env.REDIS_URL || JSON.parse(fs.readFileSync('./config/redis.json')).REDIS_URL);
var client = redis.createClient(redisURL.port, redisURL.hostname);
client.auth(redisURL.auth.split(":")[1]);

// sessions
app.use(session({
  store: new RedisStore({
    client: client
  }),
  secret: 'this is my super secret code',
  resave: true,
  saveUninitialized: true
}));


// Routes
var routes = require('./routes');
var auth = require('./auth');

//    auth
app.get('/api/users', auth.checkAuth, auth.getUsers); // make sure authenticated
app.post('/api/users', auth.checkAuth, auth.createUser); // make sure authenticated
app.get('/api/sessions', auth.getSessions); // make sure authenticated
app.post('/login', auth.login);
app.get('/api/is-auth', auth.isAuthenticated);

//    api
app.get('/api/keys', routes.getKeys);
app.get('/api/all', routes.getAll);
app.get('/api/items', routes.getAllItems);
app.get('/api/published', routes.getPublishedItems);
app.get('/api/latest', routes.getLatestItem);
app.get('/api/items/:url', routes.getItemByUrl);
app.post('/api/items', auth.checkAuth, routes.postItem); // make sure authenticated
app.put('/api/items', auth.checkAuth, routes.putItem); // make sure authenticated
app.delete('/api/delete/:url', auth.checkAuth, routes.deleteItem); // make sure authenticated



app.get('*', function(req, res) {
  var user = {
    username: req.session.username,
    auth: req.session.auth
  };

  var body = '';  // to-do: to be used for server rendered React string

  res.send(html({
    title: 'KRB',
    body: body,
    assetRoot: 'build'
  }));
});


var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log('Listening on ' + port);
});
