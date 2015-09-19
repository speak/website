var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

var Header = React.createClass({
  render: function() {
    return <header>
      <Link to="/" className="logo"><img src="/images/logo-white.png" width="80" height="26" /></Link>
    </header>;
  }
});

module.exports = Header;