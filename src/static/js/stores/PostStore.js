var AppDispatcher   = require('../AppDispatcher');
var EventEmitter    = require('events').EventEmitter;
var ActionTypes     = require('../constants/ActionTypes');
var _               = require('underscore');

var _name = null;

var PostStore = _.extend({}, EventEmitter.prototype, {
    // Get name of user
    getName: function(props) {
        if (_name == null && props) {
            _name = props.initialName;
        }

        return _name;
    },

    // Emit change event
    emitChange: function() {
        this.emit('change');
    },

    // Add change listener
    addChangeListener: function(callback) {
        this.on('change', callback);
    },

    // Remove change listener
    removeChangeListener: function(callback) {
        this.removeListener('change', callback);
    }
});

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
