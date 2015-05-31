var $ = require('jquery');
var Backbone = require('backbone');
Backbone.$ = $;

var React = require('react/addons');

module.exports = React.createClass({
  render: function() {
    var sh = document.body.scrollHeight;  // amount of scrolling available
    var wh = $(window).height();          // window height

    var st = $(document).scrollTop();     // amount of scrolling done

    var w = $('.side').width();           // max width of position bar

    $(document).scroll( function() {
      sh = document.body.scrollHeight;    // reset based on scrolling
      st = $(document).scrollTop();       // ...

      $('.position-left').css({
        width: Math.floor(w * st/(sh-wh)) // set width of bar
      });
    });
    
    return (
      <div className="position">
        <span className="position-left"></span>
        <span className="position-right"></span>
      </div>
    );
  }
});



