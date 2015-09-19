var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;
var DocumentTitle = require('react-document-title');

var Billing = React.createClass({
  render: function() {
    return <DocumentTitle title='Billing'>
      <h2>Billing Overview</h2>
      <p>Current subscription details</p>
    
      <h2>Payment History</h2>
      <p>List of previous payments</p>
    </DocumentTitle>;
  }
});

module.exports = Billing;