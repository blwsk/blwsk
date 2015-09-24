var utils = require('../utils');

if (!Date.now) {
  Date.now = function now() {
    return new Date().getTime();
  };
}

exports.Photo = function (options) {
  /*
    src: http://...
    caption: "string"
    comment: "md"
  */
  this.date = options.date || Date.now();

  this.src = options.src;
  this.caption = options.caption || '';
  this.url = this.date;
  this.comment = options.comment || '';


  // meta
  this.published = options.published || false;  // show to audience or hold for later editing
  this.id = this.url;
  this.type = 'photo'; // default = photo
}