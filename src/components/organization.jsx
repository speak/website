var React = require('react');
var DocumentTitle = require('react-document-title');

var Organization = React.createClass({
  render: function() {
    return <DocumentTitle title={this.state.name || 'Organization'}>
      <h2>Display</h2>
      <p>Name, picture etc</p>
    </DocumentTitle>;
  }
});

module.exports = Organization;