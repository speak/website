var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

module.exports = React.createClass({
  render: function() {
    return <div>
      <Link to="/billing">Billing</Link>
      {this.props.children}
    </div>;
  }
});