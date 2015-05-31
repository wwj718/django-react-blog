'use strict';

window.React    = require('react');
var Router      = require('react-router');
var routes      = require('./router');
var target      = document.getElementById('wrapper');

// Setup the events since the server already loaded the view
Router.run(routes, Router.HistoryLocation, function(Handler) {
    React.render(<Handler initial={document.props} />, target);
});
