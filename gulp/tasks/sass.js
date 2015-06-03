'use strict';

var autoprefixer       = require('gulp-autoprefixer');
var browserSync        = require('browser-sync');
var configAutoprefixer = require('../config').autoprefixer;
var configMinifyCSS    = require('../config').minifycss;
var configSass         = require('../config').sass;
var gulp               = require('gulp');
var handleErrors       = require('../utils/handleErrors');
var minifycss          = require('gulp-minify-css');
var rename             = require('gulp-rename');
var sass               = require('gulp-sass');

/**
 * Task to handle Sass Compiling
 * @return {Gulp}
 */
gulp.task('sass', function () {
  return gulp.src(configSass.src)
    .pipe(sass(configSass.settings))
    .on('error', handleErrors)
    .pipe(autoprefixer(configAutoprefixer.settings))
    .pipe(gulp.dest(configSass.dest))
    .pipe(minifycss(configMinifyCSS.settings))
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest(configSass.dest))
    .pipe(browserSync.reload({ stream: true }));
});
