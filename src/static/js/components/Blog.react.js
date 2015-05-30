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
            <div id="blog" className="container">
                <div className="row">
                    <h1 className="page-title">
                        Hello, {this.state.name} <small>How are you doing?</small>
                    </h1>
                    <p>This is a cool React-based Blog application</p>
                </div>
            </div>
        );
    },

    _onChange: function() {
        this.setState(getAppState(null));
    }
});

module.exports = Blog;
