//
//  backbone + react app
//
exports.index = function(req, res) {
  res.sendfile('views/index.html');
}















//
//  api
//
var Firebase = require("firebase");
var firebaseRoot = new Firebase('https://resplendent-fire-7278.firebaseio.com/');
exports.api = function(req, res) {
  firebaseRoot.once('value', function(snapshot) {
    var val = snapshot.val();
    res.send(val);
  });
}

/*
var firebaseSearch = new Firebase("https://resplendent-fire-7278.firebaseio.com/search");
exports.results = function(req, res) {
  firebaseSearch.push({
    'query': req.params.query
  });
  res.send({
    "query": req.params.query
  });
}
*/















