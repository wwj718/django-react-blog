'use strict';

var AppDispatcher   = require('../AppDispatcher');
var EventEmitter    = require('events').EventEmitter;
var ActionTypes     = require('../constants/ActionTypes');
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
    // case ActionTypes.SET_ACTIVE_LINK:
    //     break;

    default:
      return true;
  }

  PostStore.emitChange();

  return true;
});

module.exports = PostStore;
