var AppDispatcher = require('../dispatcher/app-dispatcher');
var Bulldog = require('../libs/bulldog');

var AuthActions = {
  signout: function(input) {
    AppDispatcher.dispatch('session.destroy');
  },
  
  signin: function(input) {
    Bulldog.createSessionFromEmailPassword(input);
  }
};

module.exports = AuthActions;
