'use strict';

var React       = require('react');
var Link        = require('react-router').Link;

// Navigation Component
var Navigation = React.createClass({
  /**
   * Render the component
   * @return  {Object}
   */
  render: function() {
    return (
      /* jshint ignore:start */
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar_collapse">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <Link to="app" className="navbar-brand">
              <span className="fa-stack fa-2x">
                <i className="fa fa-circle-thin fa-stack-2x"></i>
                <i className="fa fa-code fa-stack-1x fa"></i>
              </span>
            </Link>
          </div>

          <div className="collapse navbar-collapse" id="navbar_collapse">
            <ul className="nav navbar-nav">
              <li><Link to="app">Home</Link></li>
              <li><Link to="about">About</Link></li>
            </ul>
          </div>
        </div>
      </nav>
      /* jshint ignore:end */
    );
  }
});

module.exports = Navigation;
