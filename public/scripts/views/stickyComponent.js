define([
  'jquery',
  'underscore',
  'backbone',
  'react'
], function($, _, Backbone, React) {

  //
  //  React components
  //

  var StickyComponent = React.createClass({
    render: function() {
      return (
        <div className="sticky">
          <p>Things <del>will</del> might be posted here at some point in time. Until then, here are some links:</p>
          <ul>
            <li><a href="/training">BCVM winter training game</a> (work-in-progress)</li>
          </ul>
        </div>
      );
    }
  });

  return StickyComponent;

});