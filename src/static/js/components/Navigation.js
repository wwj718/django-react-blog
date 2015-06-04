'use strict';

var React       = require('react');
var Link        = require('react-router').Link;

// Navigation Component
var Navigation = React.createClass({
  /**
   * Render the component
   * @return  {Object}
   */
  render: function() {
    return (
      /* jshint ignore:start */
      <div>
        <ul>
          <li><Link to="app">Home</Link></li>
          <li><Link to="about">About</Link></li>
        </ul>
      </div>
      /* jshint ignore:end */
    );
  }
});

module.exports = Navigation;
