'use strict';

var React           = require('react');
var Router          = require('react-router');
var Blog            = require('./components/Blog');
var DefaultRoute    = Router.DefaultRoute;
var Route           = Router.Route;
var NotFoundRoute   = Router.NotFoundRoute;

// Page Handlers
var PostsPage       = require('./pages/Posts');
var AboutPage       = require('./pages/About');
var NotFoundPage    = require('./pages/NotFound');

// Create the routes
var routes = (
  /* jshint ignore:start */
  <Route name="app" handler={Blog} path="/">
    <DefaultRoute handler={PostsPage} />
    <Route name="about" handler={AboutPage} />
    <NotFoundRoute name="NotFound" handler={NotFoundPage}/>
  </Route>
  /* jshint ignore:end */
);

module.exports = routes;
