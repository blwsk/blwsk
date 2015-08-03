exports.replaceAll = function(find, replace, str) {
  return str.replace(new RegExp(find, 'g'), replace);
}