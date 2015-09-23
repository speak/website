var AppDispatcher = require('../dispatcher/app-dispatcher');

var BulldogActions = {
  signedIn: function(data) {
    AppDispatcher.dispatch('user.signedin', data);
    AppDispatcher.dispatch('session.created', data);
  },

  error: function(response) {
    AppDispatcher.dispatch('banner.error', response.params);
    AppDispatcher.dispatch('session.error', response);
  },

  reset: function(response) {
    AppDispatcher.dispatch('session.error', response);
  }
};

module.exports = BulldogActions;