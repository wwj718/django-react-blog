var React       = require('react');
var AppActions  = require('../actions/AppActions');
var AppStore    = require('../stores/AppStore');


function getAppState(props) {
    return {
        name: AppStore.getName(props)
    };
}

var Blog = React.createClass({
    getInitialState: function() {
        return getAppState(this.props);
    },

    componentDidMount: function() {
        AppStore.addChangeListener(this._onChange);
    },

    componentWillUnmount: function() {
        AppStore.removeChangeListener(this._onChange);
    },

    render: function() {
        return (
            <div id="blog">Hello, {this.state.name}</div>
        );
    },

    _onChange: function() {
        this.setState(getAppState(null));
    }
});

module.exports = Blog;
