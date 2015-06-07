'use strict';

var React     = require('react');
var PostList  = require('../components/PostList');

// Home Page Component
var Home = React.createClass({
  /**
   * Render the component
   * @return  {Object}
   */
  render: function() {
    return (
      /* jshint ignore:start */
      <div>
          <h1>Hello, world!</h1>
          <p>This is the home page</p>

          <PostList user='' query='' status='' posts={this.props.state.posts} pagination={this.props.state.pagination}/>
      </div>
      /* jshint ignore:end */
    );
  },
});

module.exports = Home;
