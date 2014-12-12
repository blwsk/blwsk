require.config({

  paths: {
    'jquery':         '//cdnjs.cloudflare.com/ajax/libs/jquery/2.1.1/jquery.min',
    'underscore':     '//cdnjs.cloudflare.com/ajax/libs/underscore.js/1.7.0/underscore-min',
    'backbone':       '//cdnjs.cloudflare.com/ajax/libs/backbone.js/1.1.2/backbone-min',
    'text':           '//cdnjs.cloudflare.com/ajax/libs/require-text/2.0.12/text',
    'react':          '//cdnjs.cloudflare.com/ajax/libs/react/0.12.1/react-with-addons.min',
    'jsx':            'lib/jsx',
    'JSXTransformer': '//cdnjs.cloudflare.com/ajax/libs/react/0.12.1/JSXTransformer',
    'firebase':       '//cdn.firebase.com/js/client/2.0.4/firebase.js',
    'backfire':       '//cdn.firebase.com/libs/backfire/0.4.0/backfire.min.js'
  },

  shim: {
    JSXTransformer: {
      exports: 'JSXTransformer'
    }
  }

});


//
//  app
//

require(['jquery', 'jsx!views/trainingView'], function($, TrainingView) {
  new TrainingView;
});