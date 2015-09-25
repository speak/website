$(function(){
  // Detect platform
  platform = getParam('platform') || (navigator.platform.indexOf('Win') > -1 ? 'win' : navigator.platform.indexOf('Mac') > -1 ? 'mac' : navigator.platform.indexOf('Linux') > -1 ? 'linux' : 'other');

  // Toggle windows items
  if (platform == 'win') {
    $('.win').show();
  } else if (platform == 'linux') {
    $('.linux').show();
  } else {
    $('.mac').show();
  }
  
  // Track download
  $('.win .download-btn').click(function() {
    ga('send', 'event', 'click', 'download', 'windows');
    client.addEvent("site.downloaded_app", details);
  });
  
  // Track download
  $('.mac .download-btn').click(function() {
    ga('send', 'event', 'click', 'download', 'mac');
    client.addEvent("site.downloaded_app", details);
  });

  $(".button-win").click(function() {
    $("#email").focus();
  });
});

// utilities
function getParam(name) {
  name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
  var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
      results = regex.exec(location.search);
  return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}