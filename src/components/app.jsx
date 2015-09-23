var React = require('react');
var Flux = require('delorean').Flux;
var Header = require('./header');
var Navigation = require('./navigation');
var DocumentTitle = require('react-document-title');

var App = React.createClass({
  mixins: [Flux.mixins.storeListener],

  watchStores: ['authStore'],
  
  render: function() {
    var auth = this.getStore('authStore');

    return <DocumentTitle title='Account'>
      <div id="app">
        {auth.token ? <Header /> : null}
        {auth.token ? <Navigation /> : null}
        <section>{this.props.children}</section>
      </div>
    </DocumentTitle>;
  }
});

module.exports = App;