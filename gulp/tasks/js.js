'use strict';

var browserSync   = require('browser-sync');
var config        = require('../config').js;
var gulp          = require('gulp');
var sourcemaps    = require('gulp-sourcemaps');
var handleErrors  = require('../utils/handleErrors');

/**
 * Task to handle Javascript Compiling
 * @return {Gulp}
 */
gulp.task('js', function () {
  return gulp.src(config.src)
    .on('error', handleErrors)
    .pipe(sourcemaps.init())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(config.dest))
    .pipe(browserSync.reload({stream:true}));
});
