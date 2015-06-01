'use strict';

var config  = require('../config');
var gulp    = require('gulp');
var spawn   = require('child_process').spawn;
var node;

/**
 * Task to manage the server
 * @return {Void}
 */
gulp.task('server', function() {
  if (node) node.kill()

  node = spawn('node', [config.server], {stdio: 'inherit'})

  node.on('close', function (code) {
    if (code === 8) {
      gulp.log('Error detected, waiting for changes...');
    }
  });
})

// Kill node on exit
process.on('exit', function() {
    if (node) node.kill()
})
