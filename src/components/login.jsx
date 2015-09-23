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
        <p>Login Form</p>
        <input type="email" ref="email" />
        <input type="password" ref="password" />
        <input type="submit" value="Go" />
      </form>
    </DocumentTitle>;
  }
});

module.exports = Login;