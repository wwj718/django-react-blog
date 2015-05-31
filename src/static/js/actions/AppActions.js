var AppDispatcher   = require('../dispatcher/AppDispatcher');
var AppConstants    = require('../constants/AppConstants');

var AppActions = {
    setActiveLink: function(link) {
        AppDispatcher.handleAction({
            actionType: AppConstants.SET_ACTIVE_LINK,
            link: link
        })
    },
};

module.exports = AppActions;
