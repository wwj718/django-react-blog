'use strict';

var AppDispatcher   = require('../AppDispatcher');
var ActionTypes     = require('../constants/ActionTypes');

// Specify action endpoints
var PostActionCreator = {
    /**
     * Update pagination to new page
     * @return  {Void}
     */
    gotoPage: function(page_number) {
        AppDispatcher.handleAction({
            actionType: ActionTypes.GOTO_PAGE,
            page_number: page_number
        })
    },
};

module.exports = PostActionCreator;
