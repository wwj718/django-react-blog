var AppDispatcher   = require('../dispatcher/AppDispatcher');
var EventEmitter    = require('events').EventEmitter;
var AppConstants    = require('../constants/AppConstants');
var _               = require('underscore');

var _name = null,
    _activeLink = 'home';

var AppStore = _.extend({}, EventEmitter.prototype, {
    // Get name of user
    getName: function(props) {
        if (_name == null && props) {
            _name = props.initialName;
        }

        return _name;
    },

    // Get active navigation link
    getActiveLink: function() {
        return _activeLink;
    },

    // Set active navigation link
    setActiveLink: function(link) {
        _activeLink = link;
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
        case AppConstants.SET_ACTIVE_LINK:
            AppStore.setActiveLink(action.link);
            break;

        default:
            return true;
    }

    AppStore.emitChange();

    return true;
});

module.exports = AppStore;
