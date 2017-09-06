// Karma configuration
// Generated on Wed Sep 06 2017 10:58:27 GMT-0700 (PDT)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jquery-3.2.1', 'jasmine', 'browserify'],


    // list of files / patterns to load in the browser
    files: [
      'js/*.js',
      'spec/*-spec.js',
    ],


    // list of files to exclude
    exclude: [
    ],

    plugins: [
        'karma-jquery',
        'karma-browserify',
        'karma-jasmine',
        'karma-chrome-launcher',
        'karma-jasmine-html-reporter'
      ],
    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      'js/*.js': [ 'browserify'],
     'spec/*.js': ['browserify'],
    },




    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress', 'kjhtml'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome'],
    singleRun: false,
    concurrency: Infinity
  })
}
