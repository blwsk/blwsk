exports.index = function(req, res) {
  res.sendfile('index.html');
}

exports.api = function(req, res) {
  res.send({
    'name': 'Kevin Bielawski'
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