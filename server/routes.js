var redis = require('redis');
var url = require('url');
var fs = require('fs');
var _ = require('lodash');

// helpers
var createArray = require('./utils').createArray;
var Item = require('./item').Item;


// setup
var redisURL = url.parse(process.env.REDIS_URL || JSON.parse(fs.readFileSync('./config/redis.json')).REDIS_URL);
var client = redis.createClient(redisURL.port, redisURL.hostname);
client.auth(redisURL.auth.split(":")[1]);

/*
    routes
*/

exports.getKeys = function(req, res) {
  // /api/keys

  client.keys('*', function(err, reply) {
    res.json(reply);
  });
}

exports.getAll = function(req, res) {
  // /api/all

  createArray(client, function(reply) {
    res.json(reply);
  });
}

exports.getAllItems = function(req, res) {
  // /api/items

  createArray(client, function(reply) {
    var items = reply.filter( function(obj) {
      try {
        return obj.type == 'item';
      }
      catch (err) {}
    });
    items.sort( function(a, b) {
      return b.date - a.date;
    });
    res.json(items);
  });
}

exports.getPublishedItems = function(req, res) {
  createArray(client, function(reply) {
    //console.log(arr.length);
    var items = reply.filter( function(obj) {
      try {
        return obj.type == 'item' && obj.published == true;
      }
      catch (err) {}
    });
    items.sort( function(a, b) {
      return b.date - a.date;
    });
    res.json(items);
  });
}

exports.getLatestItem = function(req, res) {
  createArray(client, function(reply) {
    //console.log(arr.length);
    var items = reply.filter( function(obj) {
      try {
        return obj.type == 'item' && obj.published == true;
      }
      catch (err) {}
    });

    var max = -Infinity;
    var item;

    items.map( function(obj) {
      if (obj.date > max) {
        max = obj.date;
        item = obj;
      }
    });

    res.json(item);
  });
}

exports.getItem = function(req, res) {
  // get specific item by :id param

  var id = req.params.id;

  client.get(id, function(err, reply) {
    if (err != null)
      res.json({'error': 'problem'});
    else if (reply == null)
      res.json({'error': 'key does not exist'});
    else
      res.json(JSON.parse(reply));
  });
}

exports.getItemByUrl = function(req, res) {
  // get specific item by :url param

  var url = req.params.url;

  createArray(client, function(reply) {
    var items = reply.filter( function(obj) {
      try {
        return obj.type == 'item' && obj.url == url;
      }
      catch (err) {
        return err;
      }
    });

    res.json(items[0]);
  });
}

exports.postItem = function(req, res) {
  // create item

  var body = req.body;
  var keys = Object.keys(body);

  // create Item object
  var i = new Item({
    'title': body.title,
    'date': body.date,
    'content': body.content,
    'published': body.published
  });

  // save Item to client and send JSON response
  client.set(i.url, JSON.stringify(i));
  res.json(i);
}

exports.putItem = function(req, res) {
  var body = req.body;
  var keys = Object.keys(body);

  // create Item object
  var i = new Item({
    'title': body.title,
    'date': body.date,
    'content': body.content,
    'published': body.published
  });

  // save Item to client and send JSON response
  client.set(i.url, JSON.stringify(i));
  res.json(i);
}

exports.deleteItem = function(req, res) {
  var url = req.params.url;
  client.del(url);
  res.send('success');
}
