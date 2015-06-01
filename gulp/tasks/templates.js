'use strict';

var browserSync  = require('browser-sync');
var gulp         = require('gulp');

/**
 * Task to handle template changes
 * @return {Void}
 */
gulp.task('templates', function () {
  browserSync.reload();
});
