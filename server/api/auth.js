var bcrypt = require('bcrypt');
var client = require('../db').client;
var createArray = require('../utils').createArray;


// auth routes

exports.getUsers = function(req, res) {
  // GET /api/users

  createArray(client, function(arr) {
    
    var items = arr.filter( function(obj) {
      try {
        return obj.type == 'user';
      }
      catch (err) {}
    });

    res.json(items);
  });
}

exports.getSessions = function(req, res) {
  // GET /api/users

  createArray(client, function(arr) {
    
    var items = arr.filter( function(obj) {
      try {
        return obj.cookie != null;
      }
      catch (err) {}
    });

    res.json(items);
  });
}

exports.createUser = function(req, res) {
  // POST /api/users

  var body = req.body;

  bcrypt.genSalt(10, function(err, salt) {
    bcrypt.hash(body.password, salt, function(err, hash) {
      
      var u = {
        type: body.type,
        username: body.username,
        password: hash
      };

      var id = u.username;
      var str = JSON.stringify(u);

      client.set(id, str);
      res.json(u);
    });
  });
}


function checkPassword(password, hash) {
  return bcrypt.compareSync(password, hash);
}

var User = function(obj) {
  this.type = obj.type;
  this.username = obj.username;
  this.password = obj.password;
};

User.prototype.authenticate = function(req) {
  // do authentication

  req.session.username = this.username;
  req.session.auth = true;

  return {
    username: this.username,
    auth: true
  };
};

exports.login = function(req, res) {
  // POST /login

  var body = req.body;

  var u = new User({
    type: body.type,
    username: body.username,
    password: body.password
  });

  createArray(client, function(arr) {
    var item = arr.filter( function(obj) {
      try {
        return obj.type == 'user' && obj.username == u.username;
      }
      catch (err) {}
    });

    if (item.length > 0 && checkPassword(u.password, item[0].password))
      res.json(u.authenticate(req));
    else
      res.json({error: 'Trouble!!'});
  });
}

function checkDate(date) {
  // checks to see if date has passed
  var current = Date.now();
  return current > date;
}

function checkAuth(req, res, next) {
  if (req.session.auth) {
    return next();
  }
  else {
    return res.redirect('/login');
  }
}
exports.checkAuth = checkAuth;

exports.isAuthenticated = function(req, res) {
  res.send({
    username: req.session.username,
    auth: req.session.auth
  });
}