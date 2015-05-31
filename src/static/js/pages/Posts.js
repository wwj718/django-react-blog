var React               = require('react');

var Posts = React.createClass({
    render: function() {
        return (
            <div className="container">
                <div className="row">
                    <h1 className="page-title">
                        Hello, {this.props.state.name} <small>How are you doing?</small>
                    </h1>
                    <p>This is a cool React-based Blog application</p>
                </div>
            </div>
        );
    },
});

module.exports = Posts;
