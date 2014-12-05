//
//  backbone + react app
//
exports.index = function(req, res) {
  res.sendfile('index.html');
}


//
//  api and search
//
var Firebase = require("firebase");
var firebaseRoot = new Firebase("https://resplendent-fire-7278.firebaseio.com/");
exports.api = function(req, res) {
  firebaseRoot.once('value', function(snapshot) {
    //  snapshot.forEach( function(child) {});
    var val = snapshot.val();
    res.send(val);
  });
}

exports.search = function(req, res) {
  res.sendfile('views/search.html');
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