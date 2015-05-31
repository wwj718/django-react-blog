'use strict';

var React = require('react');

// Posts Component
var Posts = React.createClass({
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
                        Hello, {this.props.state.name} <small>How are you doing?</small>
                    </h1>
                    <p>This is a cool React-based Blog application</p>
                </div>
            </div>
            /* jshint ignore:end */
        );
    },
});

module.exports = Posts;
