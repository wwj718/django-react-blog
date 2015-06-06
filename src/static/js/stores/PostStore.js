'use strict';

var AppDispatcher   = require('../AppDispatcher');
var EventEmitter    = require('events').EventEmitter;
var ActionTypes     = require('../constants/ActionTypes');
var request         = require('superagent');
var _               = require('underscore');

// Private post variables
var _posts = null,
    _pagination = null;

// Handle post actions
var PostStore = _.extend({}, EventEmitter.prototype, {
  /**
   * Get posts
   * @param   {Object}  props  Initial props
   * @return  {String}
   */
  getPosts: function(props) {
    if (_posts == null && props) {
        _posts = JSON.parse(props.initialPosts);
    }

    return _posts;
  },

  /**
   * Get pagination
   * @param   {Object}  props  Initial props
   * @return  {String}
   */
  getPagination: function(props) {
    if (_pagination == null && props) {
        _pagination = JSON.parse(props.initialPagination);
    }

    return _pagination;
  },

  /**
   * Update page number
   * @param   {String}  page_number  Page number
   * @return  {Void}
   */
  gotoPage: function(page_number) {
    var self = this;

    request
      .get('/api/posts?page=' + page_number)
      .set('Accept', 'application/json')
      .end(function(err, res){
        var result = JSON.parse(res.text);

        _posts = result.results;
        _pagination['current_page'] = page_number;
        _pagination['next_page'] = (result.next) ? true : false;
        _pagination['prev_page'] = (result.previous) ? true : false;

        self.emitChange();
      });
  },

  /**
   * Emit the EventEmitter change event to send data downstream
   * @return  {Void}
   */
  emitChange: function() {
    this.emit('change');
  },

  /**
   * Specify the callback for change events
   * @param   {Function}  callback  Function to handle state changes
   * @return  {Void}
   */
  addChangeListener: function(callback) {
    this.on('change', callback);
  },

  /**
   * Remove the callback for change events
   * @param   {Function}  callback  Function to handle state changes
   * @return  {Void}
   */
  removeChangeListener: function(callback) {
    this.removeListener('change', callback);
  }
});

// Register actions with the dispatcher
AppDispatcher.register(function(payload) {
  var action = payload.action;

  switch(action.actionType) {
    case ActionTypes.GOTO_PAGE:
      PostStore.gotoPage(action.page_number);
      break;

    default:
      return true;
  }

  PostStore.emitChange();

  return true;
});

module.exports = PostStore;
