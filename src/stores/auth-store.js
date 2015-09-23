var Flux = require('delorean').Flux;

var AuthStore = Flux.createStore({
  
  scheme: {
    id: null,
    ticket: "",
    token: ""
  },
  
  actions: {
    'session.created': 'sessionCreated',
    'session.destroy': 'sessionDestroy'
  },
  
  sessionCreated: function(data) {
    this.set(data);
  },
  
  sessionDestroy: function(data) {
    this.set({
      ticket: null,
      token: null
    });
  }
});

module.exports = AuthStore;