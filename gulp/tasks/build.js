'use strict';

var config      = require('../config');
var del         = require('del');
var gulp        = require('gulp');
var outputLogo  = require('../utils/outputLogo');

outputLogo();

/**
 * Task to build the application
 * @return {Void}
 */
gulp.task('build', ['js', 'browserify', 'sass', 'imageOptimize', 'third_party'], function(){
  global.isBuilding = false;
});
