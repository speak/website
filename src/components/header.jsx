var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;
var Flux = require('delorean').Flux;

var Header = React.createClass({
  mixins: [Flux.mixins.storeListener],

  watchStores: ['authStore'],
  
  render: function() {
    var auth = this.getStore('authStore');
    
    return <header>
      <Link to="/" className="logo"><img src="/images/logo-white.png" width="80" height="26" /></Link>
      {auth.token ? <Link to="/logout">Logout</Link> : <Link to="/login">Login</Link>}
    </header>;
  }
});

module.exports = Header;