'use strict';

window.React    = require('react');
var Router      = require('react-router');
var routes      = require('./router');
var target      = document.getElementById('wrapper');

// Setup the events since the server already loaded the view
Router.run(routes, Router.HistoryLocation, function(Handler, routeState) {
  var currentRoute = routeState.routes[routeState.routes.length - 1];

  // Set body element to "page-ROUTE_NAME"
  document.body.setAttribute('class', 'page-' + currentRoute.name);

  React.render(<Handler initial={document.props} />, target);
});
