var React = require('react/addons');

var parseItem = require('babel!./parseItem.jsx');

module.exports = function(data) {
  var contentNodes = [];

  // add all nodes
  for (var i = 0; i < data.length; i++) {
    contentNodes.push(parseItem(data[i]))
  }

  return contentNodes;
}