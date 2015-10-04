'use strict';

function get(url) {
  //  get('/api/items').then( function(res) {
  //    console.log(res);
  //  }, function(err) {
  //    console.log(err);
  //  });

  return new Promise( function(resolve, reject) {
    var req = new XMLHttpRequest();
    req.open('GET', url);

    req.onload = function() {
      if (req.status == 200) {
        resolve(req.response);
      }
      else {
        reject(Error(req.statusText));
      }
    };

    // errors
    req.onerror = function() {
      reject(Error("Error"));
    };

    req.send();
  });
}

export default get;
