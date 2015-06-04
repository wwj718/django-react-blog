'use strict';

var React = require('react');

// NotFound Page Component
var NotFound = React.createClass({
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
            404 <small>Page Not Found</small>
          </h1>
          <p>Sorry, we can't find that page.</p>
        </div>
      </div>
      /* jshint ignore:end */
    );
  }
});

module.exports = NotFound;
