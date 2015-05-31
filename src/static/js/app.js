window.React    = require('react');
var Router      = require('react-router');
var routes      = require('./router');
var target      = document.getElementById('wrapper');

Router.run(routes, Router.HistoryLocation, function(Handler) {
    React.render(<Handler initial={document.props} />, target);
});
