var jsx_compiler    = require('node-jsx');
var express         = require('express');
var React           = require('react');
var app             = express();

jsx_compiler.install();

var Blog            = require('../../src/static/js/components/Blog');
var BlogFactory     = React.createFactory(Blog);

var Components = {
    Blog: BlogFactory
};

app.get('/', function (req, res) {
    var data = JSON.parse(req.query.data);
    var component = Components[req.query.component_name];
    res.send(React.renderToString(component(data)));
});

var server = app.listen(4000, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log('react app listening at http://%s:%s', host, port);
});
