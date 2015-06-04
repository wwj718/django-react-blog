'use strict';

var React       = require('react');
var Link        = require('react-router').Link;

// Posts Component
var Posts = React.createClass({
  /**
   * Render the component
   * @return  {Object}
   */
  render: function() {
    console.log(this.props.posts);
    return (
      /* jshint ignore:start */
      <div>
      </div>
      /* jshint ignore:end */
    );
  }
});

module.exports = Posts;
