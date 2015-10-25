$(function(){
  try {
    client = new Keen({
      projectId: window.keen_project_id,
      writeKey: window.keen_write_key,
      protocol: "https",
      host: "api.keen.io/3.0",
      requestType: "jsonp"
    });
  } catch(err) {
    // probably an adblocker
    client = {addEvent: function(){}};
  }

  // Toggle windows items
  var platform = getPlatform();
  if (platform == 'win') {
    $('.win').show();
  } else if (platform == 'linux') {
    $('.linux').show();
  } else {
    $('.mac').show();
  }
  
  // Track Windows download
  $('.win .download-btn').click(function() {
    ga('send', 'event', 'click', 'download', 'windows');
    client.addEvent("site.downloaded_app", getClientDetails());
  });
  
  // Track Mac download
  $('.mac .download-btn').click(function() {
    ga('send', 'event', 'click', 'download', 'mac');
    client.addEvent("site.downloaded_app", getClientDetails());
  });

  $(".button-win").click(function() {
    $("#email").focus();
  });
});

function getClientDetails() {
  // Separate referrer site and params
  var url = document.referrer;
  var referrer = url.split( '?' );
  var referrer_site = referrer[0] || url;
  var referrer_params = referrer[1] || '';
  
  return {
    id: Math.uuid(),
    page: window.location.href,
    time: new Date().toISOString(),
    referrer: referrer_site,
    referrer_params: referrer_params,
    agent: window.navigator.userAgent,
    platform: getPlatform()
  };
}

function getPlatform() {
  return getParam('platform') || (navigator.platform.indexOf('Win') > -1 ? 'win' : navigator.platform.indexOf('Mac') > -1 ? 'mac' : navigator.platform.indexOf('Linux') > -1 ? 'linux' : 'other');
}

// utilities
function getParam(name) {
  name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
  var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
      results = regex.exec(location.search);
  return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}