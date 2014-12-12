define([
  'jquery',
  'underscore',
  'backbone',
  'react',
  'jsx!/../views/trainingNavComponent',
  'jsx!/../views/trainingContentComponent'
], function($, _, Backbone, React, TrainingNav, TrainingContent) {

  //
  //  React components
  //

  var Layout = React.createClass({
    render: function() {
      return (
        <div className="layout">
          <TrainingNav />
          <TrainingContent />
        </div>
      );
    }
  });

  //
  //  Backbone view
  //
  var LayoutView = Backbone.View.extend({
    el: $('body'),
    initialize: function() {
      this.render();
    },
    render: function() {
      React.render(<Layout />, this.el);
    }
  });

  return LayoutView;

});