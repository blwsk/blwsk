var $ = require('jquery');
var Backbone = require('backbone');
Backbone.$ = $;

/*
    Handle internal (i.e. # or /...) 
    and external (i.e. target="_blank") links
*/
$(document.body).on('click', 'a', function(e){
  var hrefChar = $(this).attr('href').charAt(0);
  if ( hrefChar == '#' || hrefChar == '/' ) {
    e.preventDefault();
  }
  var target = $(this).attr('target');
  var href = $(this).attr
  if ( target != '_blank' && hrefChar != 'm' ) {
    Backbone.history.navigate(e.currentTarget.pathname, {trigger: true});
  }
});


/*
    Instantiate Backbone router
*/
var Router = require('./router.js');

new Router;

