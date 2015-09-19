var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var Link = ReactRouter.Link;

var App = require('./components/app');
var Billing = require('./components/billing');
var Organization = require('./components/organization');

// React Router does all the fancy stuff for us
React.render((
  <Router>
    <Route path="/" component={App}>
      <Route path="team/:id" component={Organization} />
      <Route path="team/:id/billing" component={Billing} />
    </Route>
  </Router>
), document.getElementById('account'));