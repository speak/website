var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;
var DocumentTitle = require('react-document-title');
var AuthActions = require('../actions/auth-actions');

var Login = React.createClass({
  
  getInitialState: function() {
    return {
      saving: false
    }
  },

  handleSubmit: function(ev) {
    ev.preventDefault();
    this.setState({saving: true});

    AuthActions.signin({
      email: this.refs.email.getDOMNode().value,
      password: this.refs.password.getDOMNode().value
    });
  },

  render: function() {
    return <DocumentTitle title='Login'>
      <form onSubmit={this.handleSubmit}>
        <p>Login already</p>
        <input type="email" ref="email" placeholder="Email" />
        <input type="password" ref="password" placeholder="Password" />
        <input type="submit" value="Login" />
      </form>
    </DocumentTitle>;
  }
});

module.exports = Login;