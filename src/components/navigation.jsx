var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

var Navigation = React.createClass({
  render: function() {
    return <nav className="sidebar">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="billing">Billing</Link></li>
      </ul>
    </nav>;
  }
});

module.exports = Navigation;