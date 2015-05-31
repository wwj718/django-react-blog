var React               = require('react');

var About = React.createClass({
    render: function() {
        return (
            <div className="container">
                <div className="row">
                    <h1 className="page-title">
                        About <small>An About Page</small>
                    </h1>
                    <p>About this blog</p>
                </div>
            </div>
        );
    }
});

module.exports = About;
