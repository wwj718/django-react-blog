// Compile all JSX on the fly
require('node-jsx').install();

var express         = require('express');
var React           = require('react');
var Router          = require('react-router');
var app             = express();
var routes          = require('../../src/static/js/router');

// Handle getting the current route for SSR
app.get('/', function (req, res) {
    var data = { initial: JSON.parse(req.query.data) };

    Router.run(routes, function(Handler, routeState) {
        var factory = React.createFactory(Handler);
        var currentRoute = routeState.routes.pop();

        res.send(React.renderToString(factory(data)));
    });

});

// Run the Node server
var server = app.listen(4000, function () {
    var port = server.address().port;

    console.log('...listening on port %s', port);
});
