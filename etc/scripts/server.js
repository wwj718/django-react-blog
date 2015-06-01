'use strict';

// Compile all JSX on the fly
require('node-jsx').install();

var express         = require('express');
var React           = require('react');
var Router          = require('react-router');
var server          = express();
var routes          = require('../../src/static/js/router');

/**
 * Handle the SSR rendering of our Blog application
 * @param  {Object}  req  Request
 * @param  {Object}  res  Response
 * @return {Void}
 */
function renderBlog(req, res) {
  var data = { initial: JSON.parse(req.query.data) };

  Router.run(routes, req.query.url, function(Handler, routeState) {
    var factory = React.createFactory(Handler);
    res.send(React.renderToString(factory(data)));
  });
}

// Use render function for routes
server.use(renderBlog);

// Build server listener
server.listen(4000, function () {
  console.log('...listening on port 4000');
});
