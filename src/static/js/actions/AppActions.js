var AppDispatcher   = require('../dispatcher/AppDispatcher');
var AppConstants    = require('../constants/AppConstants');

var AppActions = {
    action: function(count) {
        AppDispatcher.handleAction({
            actionType: AppConstants.CONSTANT
        })
    },
};

module.exports = AppActions;
