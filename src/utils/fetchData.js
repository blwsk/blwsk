function fetchData(url, callback) {
  let xhr = new XMLHttpRequest();
  xhr.open('GET', url, true);
  xhr.onload = function() {
    let data = JSON.parse(xhr.responseText);
    callback(data);
  }.bind(this);
  xhr.send();
}

module.exports = fetchData;