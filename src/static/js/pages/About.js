'use strict';

var React = require('react');

// About Page Component
var About = React.createClass({
  /**
   * Render the component
   * @return  {Object}
   */
  render: function() {
    return (
      /* jshint ignore:start */
      <div>
        <h1>About <small>An About Page</small></h1>
        <p>About this blog</p>
      </div>
      /* jshint ignore:end */
    );
  }
});

module.exports = About;
