//
//  backbone + react app
//
exports.index = function(req, res) {
  res.sendfile('index.html');
}


var Firebase = require("firebase");
var firebase = new Firebase("https://resplendent-fire-7278.firebaseio.com/");

exports.api = function(req, res) {

  firebase.push({ 'user_id': 'fred', 'text': 'Yabba Dabba Doo!' });

  /*
  firebase.set({
    title: "Hello World!",
    author: "Firebase",
    location: {
      city: "San Francisco",
      state: "California",
      zip: 94103
    }
  });
*/

  res.send({
    'name': 'Kevin Bielawski'
  });
}

exports.search = function(req, res) {
  res.sendfile('views/search.html');
}

exports.results = function(req, res) {
  res.send({
    "entry": req.params.query
  });
}


/*
  SNIPPETS
*/

/*
  var path = req.path;
  if (path.indexOf('api')==1) {
    //  signifies that this is an api call
    res.send({
      'name': 'kevin'
    });
  }
  else {
    //  app
    res.sendfile('index.html');
  }
*/