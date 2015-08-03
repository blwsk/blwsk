var redis = require('redis');
var url = require('url');
var fs = require('fs');
var _ = require('lodash');

// Item class
var Item = require('./item').Item;


// setup
var redisURL = url.parse(process.env.REDIS_URL || JSON.parse(fs.readFileSync('./config/redis.json')).REDIS_URL);
var client = redis.createClient(redisURL.port, redisURL.hostname);
client.auth(redisURL.auth.split(":")[1]);


/*
    routes
*/

exports.getAll = function(req, res) {
  // gets all keys from datastore

  client.keys('*', function(err, replies) {
    // replies.forEach( function(reply) {});

    res.json({
      'keys': replies,
      'num': replies.length
    });
  });
}

exports.getItem = function(req, res) {
  // get specific item by :id param

  var id = req.params.id;

  client.hgetall(id, function(err, reply) {
    if (err != null)
      res.json({'error': 'problem'});
    else if (reply == null)
      res.json({'error': 'key does not exist'});
    else
      res.json(reply);
  });
}

exports.postItem = function(req, res) {
  // create item

  var body = req.body;
  var keys = Object.keys(body);

  // create Item object
  var i = new Item({
    'title': body.title,
    'content': body.content
  });

  // save Item to client and send JSON response
  client.hmset(i.url, i);
  res.json(i);
}

exports.deleteItem = function(req, res) {

}