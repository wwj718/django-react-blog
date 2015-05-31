'use strict';

var AppDispatcher   = require('../AppDispatcher');
var ActionTypes     = require('../constants/ActionTypes');

// Specify action endpoints
var PostActionCreator = {
    /**
     * Set an active link
     * @param   {String}  link  Link to set
     * @return  {Void}
     */
    setActiveLink: function(link) {
        AppDispatcher.handleAction({
            actionType: ActionTypes.SET_ACTIVE_LINK,
            link: link
        })
    },
};

module.exports = PostActionCreator;
