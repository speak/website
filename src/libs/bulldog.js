var BulldogActions = require('../actions/bulldog-actions');
var $ = require('jquery-browserify');
var _ = require('underscore');
var Config = require('config');

var Bulldog = {

  createSessionFromEmailPassword: function(data) {
    Bulldog.post({
      endpoint: '/sessions',
      data: data
    })
    .done(BulldogActions.signedIn)
    .fail(this.dispatchError);
  },

  dispatchError: function(xhr) {
    var response;
    
    try {
      response = JSON.parse(xhr.responseText);
      response.status = xhr.status;
    } catch(e) {
      response = {error: ""};
    }
    
    BulldogActions.error(response);
  },
  
  get: function(data) {
    data.type = 'GET';
    return this.request(data);
  },
  
  post: function(data) {
    data.type = 'POST';
    return this.request(data);
  },
  
  request: function(options) {
    options = _.extend({url: Config.hosts.bulldog}, options);
    options.data = options.data || {};
    
    if (options.endpoint) options.url += options.endpoint;

    // TODO: generate
    options.data.device_id = 123;
    
    // we're only dealing with JSON.
    options.crossDomain = true;
    options.dataType = 'json';
    
    return $.ajax(options);
  }
};

module.exports = Bulldog;
