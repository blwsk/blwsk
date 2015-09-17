var url = require('url');
var fs = require('fs');
var redis = require('redis');
var session = require('express-session');
var RedisStore = require('connect-redis')(session);

// redis client
var redisURL = url.parse(process.env.REDIS_URL || JSON.parse(fs.readFileSync('./config/redis.json')).REDIS_URL);
var client = redis.createClient(redisURL.port, redisURL.hostname);
client.auth(redisURL.auth.split(":")[1]);

exports.client = client;

exports.sessionFunc = session({
  store: new RedisStore({
    client: client
  }),
  secret: 'this is my super secret code',
  resave: true,
  saveUninitialized: true
});