var AppDispatcher   = require('../AppDispatcher');
var ActionTypes     = require('../constants/ActionTypes');

var PostActionCreator = {
    setActiveLink: function(link) {
        AppDispatcher.handleAction({
            actionType: ActionTypes.SET_ACTIVE_LINK,
            link: link
        })
    },
};

module.exports = PostActionCreator;
