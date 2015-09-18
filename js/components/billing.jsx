var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

module.exports = React.createClass({
  render: function() {
    return <div>Billing is <Link to="/">Home</Link></div>;
  }
});