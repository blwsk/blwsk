//
//  backbone + react apps
//  
//  ...and other pages/demos
//
exports.index = function(req, res) {
  res.sendfile('views/index.html');
}

exports.wiki = function(req, res) {
  res.sendfile('views/wiki.html');
}

exports.training = function(req, res) {
  res.sendfile('views/training.html');
}

exports.search = function(req, res) {
  res.sendfile('views/search.html');
}

exports.login = function(req, res) {
  res.sendfile('views/login.html');
}

















//
//  api
//
var Firebase = require("firebase");
var firebaseRoot = new Firebase('https://resplendent-fire-7278.firebaseio.com/');
exports.api = function(req, res) {
  firebaseRoot.once('value', function(snapshot) {
    //  snapshot.forEach( function(child) {});
    var val = snapshot.val();
    res.send(val);
  });
}

var firebaseSearch = new Firebase("https://resplendent-fire-7278.firebaseio.com/search");
exports.results = function(req, res) {
  firebaseSearch.push({
    'query': req.params.query
  });
  res.send({
    "query": req.params.query
  });
}
















