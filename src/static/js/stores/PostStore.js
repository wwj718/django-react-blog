'use strict';

var AppDispatcher   = require('../AppDispatcher');
var EventEmitter    = require('events').EventEmitter;
var ActionTypes     = require('../constants/ActionTypes');
var _               = require('underscore');

// Private post variables
var _name = null;

// Handle post actions
var PostStore = _.extend({}, EventEmitter.prototype, {
    /**
     * Get the name of the user
     * @param   {Object}  props  Initial props
     * @return  {String}
     */
    getName: function(props) {
        if (_name == null && props) {
            _name = props.initialName;
        }

        return _name;
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
