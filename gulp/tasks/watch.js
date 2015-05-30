var browserSync         = require('browser-sync');
var config              = require('../config');
var gulp                = require('gulp');
var startBrowserSync    = require('../utils/startBrowserSync');

gulp.task('watch', ['build'], function() {
    startBrowserSync();
    gulp.watch(config.sass.src, ['sass']);
    gulp.watch(config.js.src, ['js', 'browserify']);
    gulp.watch(config.templates.src, ['templates']);
});
