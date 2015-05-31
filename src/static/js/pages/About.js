'use strict';

var React = require('react');

// About Component
var About = React.createClass({
    /**
     * Render the component
     * @return  {Object}
     */
    render: function() {
        return (
            /* jshint ignore:start */
            <div className="container">
                <div className="row">
                    <h1 className="page-title">
                        About <small>An About Page</small>
                    </h1>
                    <p>About this blog</p>
                </div>
            </div>
            /* jshint ignore:end */
        );
    }
});

module.exports = About;
