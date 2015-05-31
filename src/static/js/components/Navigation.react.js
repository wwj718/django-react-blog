var React       = require('react');
var AppActions  = require('../actions/AppActions');
var AppStore    = require('../stores/AppStore');

function getAppState(props) {
    return {
        active_link: AppStore.getActiveLink()
    };
}

var Navigation = React.createClass({
    getInitialState: function() {
        return getAppState(this.props);
    },

    componentDidMount: function() {
        AppStore.addChangeListener(this._onChange);
    },

    componentWillUnmount: function() {
        AppStore.removeChangeListener(this._onChange);
    },

    setActiveLink: function(link) {
        AppActions.setActiveLink(link);
    },

    render: function() {
        return (
            <nav className="navbar navbar-default">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar_collapse">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <a className="navbar-brand" href="#">Blog</a>
                    </div>

                    <div className="collapse navbar-collapse" id="navbar_collapse">
                        <ul className="nav navbar-nav">
                            <li onClick={this.setActiveLink('home')} className="active"><a href="#">Home</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    },

    _onChange: function() {
        this.setState(getAppState(null));
    }
});

module.exports = Navigation;
