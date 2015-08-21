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

    ...

    Compose component yields 'date', 'content', 'title'
  */
  this.date = options.date || Date.now();

  // meta
  this.published = options.published || false;  // show to audience or hold for later editing
  this.id = this.date;  // use date as id
  this.type = options.type || 'item'; // default = item

  this.url = utils.replaceAll(' ', '-', options.title.toLowerCase()) || this.date;
  this.title = options.title || this.date;
  this.content = options.content || this.date;

  // strictly optional...
  this.tags = options.tags || [];
  this.assets = options.assets || {};
}
