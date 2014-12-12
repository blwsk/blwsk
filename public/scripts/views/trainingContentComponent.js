define([
  'jquery',
  'underscore',
  'backbone',
  'react'
], function($, _, Backbone, React) {

  //
  //  React components
  //

  var TrainingContentComponent = React.createClass({
    render: function() {
      var string = "container container-900";
      return (
        <div className="content">
          <div className="container-900">
            <div>Yo</div>
          </div>
        </div>
      );
    }
  });

  return TrainingContentComponent;

});