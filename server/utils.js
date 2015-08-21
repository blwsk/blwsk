exports.replaceAll = function(find, replace, str) {
  return str.replace(new RegExp(find, 'g'), replace);
}

exports.createArray = function(cl, callback) {
  // cl is redis client

  cl.keys('*', function(err, replies) {
    cl.mget(replies, function(err, all) {

      var arr = [];

      all.forEach( function(item) {
        arr.push(JSON.parse(item));
      });

      callback(arr);
    });
  });
}