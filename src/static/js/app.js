window.React    = require('react');
var Blog        = require('./components/Blog.react');
var BlogFactory = React.createFactory(Blog);

React.render(
    BlogFactory(document.props),
    document.getElementById('wrapper')
);
