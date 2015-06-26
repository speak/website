$(function(){
  // Track download
  $('.download-btn').click(function() {
    ga('send', 'event', 'click', 'download');
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