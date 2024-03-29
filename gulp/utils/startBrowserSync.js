'use strict';

var _           = require('lodash');
var browserSync = require('browser-sync');
var config      = require('../config');
var gulp        = require('gulp');
var gutil       = require('gulp-util');

var bsConfig    = config.browserSync.all;
var mode        = config.browserSyncMode + "Options";

_.assign(bsConfig, config.browserSync[mode]);

/**
 * Start the browsersync module
 * @return {Void}
 */
var startBrowserSync = function() {
  if (global.isBuilding === true){
    setTimeout(startBrowserSync, 100);
  } else {
    gutil.log('Build complete, starting BrowserSync');
    browserSync(bsConfig);
  }
};

module.exports = startBrowserSync;
