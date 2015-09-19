var React = require('react');
var Header = require('./header');
var Navigation = require('./navigation');
var DocumentTitle = require('react-document-title');

var App = React.createClass({
  render: function() {
    return <DocumentTitle title='Account'>
      <div id="app">
        <Header />
        <Navigation />
        <section>{this.props.children}</section>
      </div>
    </DocumentTitle>;
  }
});

module.exports = App;