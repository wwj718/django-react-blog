'use strict';

var React               = require('react');
var Navigation          = require('react-router').Navigation;
var Link                = require('react-router').Link;
var PostActionCreators  = require('../actions/PostActionCreators');

// Posts Component
var Posts = React.createClass({
  mixins: [Navigation],

  /**
   * Handle next page click
   * @return  {Void}
   */
  gotoNextPage: function() {
    PostActionCreators.gotoPage(this.getNextPage());
    this.transitionTo('home', null, {page: this.getNextPage()});
  },

  /**
   * Handle previous page click
   * @return  {Void}
   */
  gotoPrevPage: function() {
    PostActionCreators.gotoPage(this.getPrevPage());
    this.transitionTo('home', null, {page: this.getPrevPage()});
  },

  /**
   * Get Next Page
   * @return  {Integer}
   */
  getNextPage: function() {
    return parseInt(this.props.pagination['current_page']) + 1;
  },

  /**
   * Get Previous Page
   * @return  {Integer}
   */
  getPrevPage: function() {
    if (parseInt(this.props.pagination['current_page']) == 1) {
      return 1;
    }

    return parseInt(this.props.pagination['current_page']) - 1;
  },

  /**
   * Render the component
   * @return  {Object}
   */
  render: function() {
    var nextButton, prevButton;

    if (this.props.pagination.next_page) {
      nextButton = <a onClick={this.gotoNextPage}>Next Page</a>;
    }

    if (this.props.pagination.prev_page) {
      prevButton = <a onClick={this.gotoPrevPage}>Previous Page</a>;
    }

    return (
      /* jshint ignore:start */
      <div>
        {this.props.posts.map(function(post) {
          return (
            <div className="post" key={post.hash}>
              <strong>{post.title}</strong>
              <p>{post.content}</p>
            </div>
          );
        })}

        <hr />

        <div className="pagination">
          <div className="previous-btn">
            {prevButton}
          </div>
          <div className="next-btn">
            {nextButton}
          </div>
        </div>
      </div>
      /* jshint ignore:end */
    );
  }
});

module.exports = Posts;
