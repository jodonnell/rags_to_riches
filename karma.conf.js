var path = require('path');
var APP_DIR = path.resolve(__dirname, 'app');

module.exports = function(config) {
  config.set({
    frameworks: ['jasmine'],

      // ... normal karma configuration
    files: [
      // all files ending in "_test"
      {pattern: 'test/*_test.js', watched: false},
      {pattern: 'test/**/*_test.js', watched: false}
      // each file acts as entry point for the webpack configuration
    ],

    preprocessors: {
      // add webpack as preprocessor
      'test/*_test.js': ['webpack'],
      'test/**/*_test.js': ['webpack']
    },

    reporters: [ 'dots' ], //report results in this format

    webpack: {
        module : {
            loaders : [
                {
                    test : /\.jsx?/,
                    include : APP_DIR,
                    loader : 'babel-loader'
                }
            ]
        }

        // karma watches the test entry points
      // (you don't need to specify the entry option)
      // webpack watches dependencies

      // webpack configuration
    },

    webpackMiddleware: {
      // webpack-dev-middleware configuration
      // i. e.
      stats: 'errors-only'
    }
  });
};
