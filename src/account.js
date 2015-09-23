var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var Link = ReactRouter.Link;

var App = require('./components/app');
var Login = require('./components/login');
var Billing = require('./components/billing');
var Organization = require('./components/organization');
var AuthStore = require('./stores/auth-store');

function requireAuth(nextState, replaceState) {
  if (!AuthStore.get('token')) {
    replaceState({ nextPathname: nextState.location.pathname }, '/login');
  }
}


function requireUnauth(nextState, replaceState) {
  if (AuthStore.get('token')) {
    replaceState({ nextPathname: nextState.location.pathname }, '/');
  }
}

// React Router does all the fancy stuff for us
React.render((
  <Router>
    <Route path="/" component={App}>
      <Route path="login" component={Login} onEnter={requireUnauth} />
      <Route path="team/:id" component={Organization} onEnter={requireAuth} />
      <Route path="team/:id/billing" component={Billing} onEnter={requireAuth} />
    </Route>
  </Router>
), document.getElementById('account'));