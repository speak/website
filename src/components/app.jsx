var React = require('react');
var Navigation = require('./navigation');

var App = React.createClass({
  render: function() {
    return <div id="app">
      <Navigation />
      <section>{this.props.children}</section>
    </div>;
  }
});

module.exports = App;