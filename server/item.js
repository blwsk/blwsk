var utils = require('./utils');

if (!Date.now) {
  Date.now = function now() {
    return new Date().getTime();
  };
}

exports.Item = function (options) {
  /*
    {
      "id": "",
      "url": "",
      "title": "",
      "content": "",
      "tags": "",
      "assets": {
        ...
      }
    }
  */
  this.date = Date.now();

  this.id = 'item' + this.date;
  this.type = options.type || 'item'; // default = post
  this.url = utils.replaceAll(' ', '-', options.title.toLowerCase()) || '';
  this.title = options.title || '';
  this.content = options.content || '';
  this.tags = options.tags || [];
  this.assets = options.assets || {};
}
