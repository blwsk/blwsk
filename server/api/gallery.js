var client = require('../db').client;
var createArray = require('../utils').createArray;
var Photo = require('./photo').Photo;

// api routes

exports.getPhotos = function(req, res) {
  // GET /api/photos

  createArray(client, function(reply) {
    var items = reply.filter( function(obj) {
      try {
        return obj.type == 'photo';
      }
      catch (err) {}
    });
    items.sort( function(a, b) {
      return b.date - a.date;
    });
    res.json(items);
  });
}

exports.getPublishedPhotos = function(req, res) {
  // GET /api/photos/published

  createArray(client, function(reply) {
    //console.log(arr.length);
    var items = reply.filter( function(obj) {
      try {
        return obj.type == 'photos' && obj.published == true;
      }
      catch (err) {}
    });
    items.sort( function(a, b) {
      return b.date - a.date;
    });
    res.json(items);
  });
}

exports.postPhoto = function(req, res) {
  // POST /api/photos/:id

  var body = req.body;
  var keys = Object.keys(body);

  // create Item object
  var p = new Photo({
    'src': body.src,
    'date': body.date,
    'caption': body.caption,
    'comment': body.comment
  });

  // save Item to client and send JSON response
  client.set(p.id, JSON.stringify(p));
  res.json(p);
}

exports.deletePhoto = function(req, res) {
  // DELETE /api/photos/:id

  var id = req.params.id;
  client.del(id);
  res.send('success');
}
