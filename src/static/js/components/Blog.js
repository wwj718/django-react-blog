'use strict';

var React               = require('react');
var PostActionCreators  = require('../actions/PostActionCreators');
var PostStore           = require('../stores/PostStore');
var Navigation          = require('./Navigation');
var RouteHandler        = require('react-router').RouteHandler;

/**
 * Fetch the state of the application
 * @param   {Object}  props  Initial props
 * @return  {Object}
 */
function getAppState(props) {
    return {
        name: PostStore.getName(props)
    };
}

// Blog Component
var Blog = React.createClass({
    /**
     * Build the initial state of the component
     * @return  {Object}
     */
    getInitialState: function() {
        return getAppState(this.props.initial);
    },

    /**
     * If the component is mounted successfully, add the change listener
     * @return  {Void}
     */
    componentDidMount: function() {
        PostStore.addChangeListener(this._onChange);
    },

    /**
     * If the component is unmounting, remove the change listener
     * @return  {Void}
     */
    componentWillUnmount: function() {
        PostStore.removeChangeListener(this._onChange);
    },

    /**
     * Render the component
     * @return  {Object}
     */
    render: function() {
        return (
            /* jshint ignore:start */
            <div className="container">
                <div className="row">
                    <Navigation/>
                    <RouteHandler state={this.state}/>
                </div>
            </div>
            /* jshint ignore:end */
        );
    },

    /**
     * Change function to set the new state
     * @return  {Void}
     */
    _onChange: function() {
        this.setState(getAppState(null));
    }
});

module.exports = Blog;
