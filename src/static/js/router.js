var React           = require('react');
var Router          = require('react-router');
var Blog            = require('./components/Blog');
var DefaultRoute    = Router.DefaultRoute;
var Route           = Router.Route;
var NotFoundRoute   = Router.NotFoundRoute;

// Page Handlers
var PostsPage       = require('./pages/Posts');
var AboutPage       = require('./pages/About');

var routes = (
    <Route name="app" handler={Blog} path="/">
        <DefaultRoute name="home" handler={PostsPage} />
        <Route name="about" handler={AboutPage} />
    </Route>
);

module.exports = routes;