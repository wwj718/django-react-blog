var React               = require('react');
var PostActionCreators  = require('../actions/PostActionCreators');
var PostStore           = require('../stores/PostStore');
var Navigation          = require('./Navigation');
var RouteHandler        = require('react-router').RouteHandler;

function getAppState(props) {
    return {
        name: PostStore.getName(props)
    };
}

var Blog = React.createClass({
    getInitialState: function() {
        return getAppState(this.props.initial);
    },

    componentDidMount: function() {
        PostStore.addChangeListener(this._onChange);
    },

    componentWillUnmount: function() {
        PostStore.removeChangeListener(this._onChange);
    },

    render: function() {
        return (
            <div className="container">
                <div className="row">
                    <Navigation/>
                    <RouteHandler state={this.state}/>
                </div>
            </div>
        );
    },

    _onChange: function() {
        this.setState(getAppState(null));
    }
});

module.exports = Blog;
