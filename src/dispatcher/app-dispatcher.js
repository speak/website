var Flux = require('delorean').Flux;
var AuthStore = require('../stores/auth-store');
//var OrganizationsStore = require('../stores/organizations-store');

var AppDispatcher = Flux.createDispatcher({
  getStores: function() {
    return {
      authStore: AuthStore,
      //organizationsStore: OrganizationsStore
    }
  }
});

module.exports = AppDispatcher;