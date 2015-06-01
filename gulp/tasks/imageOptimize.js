'use strict';

var argv        = require('yargs').argv;
var cached      = require('gulp-cached');
var chalk       = require('chalk');
var config      = require('../config').images;
var gulp        = require('gulp');
var imagemin    = require('gulp-imagemin');
var production  = !!argv.production;

/**
 * Task to optimize images
 * @return {Gulp}
 */
gulp.task('imageOptimize', function() {
  if (production) {
    return gulp.src(config.src)
      .pipe(cached(imagemin(config.imageminOptions)))
      .pipe(gulp.dest(config.dest));
  }

  return gulp.src(config.src)
    .pipe(gulp.dest(config.dest));
});
