'use strict';

var browserSync       = require('browser-sync');
var config            = require('../config');
var gulp              = require('gulp');
var startBrowserSync  = require('../utils/startBrowserSync');

/**
 * Task to watch file updates
 * @return {Void}
 */
gulp.task('watch', ['build', 'server'], function() {
  startBrowserSync();
  gulp.watch(config.sass.src, ['sass']);
  gulp.watch(config.js.src, ['browserify', 'server']);
  gulp.watch(config.templates.src, ['templates']);
});
