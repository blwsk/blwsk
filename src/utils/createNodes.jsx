var React = require('react/addons');

var parseItem = require('babel!./parseItem.jsx');

module.exports = function(data) {
  var contentNodes = [];

  var p = Math.floor(Math.random() * 1000000000); // unique key prop

  // add all nodes
  for (var i = 0; i < data.length; i++) {
    contentNodes.push(parseItem(data[i], p + i))
  }

  return contentNodes;
}