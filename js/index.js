$(function(){
  // Detect platform
  var platform = getParam('platform') || (navigator.platform.indexOf('Win') > -1 ? 'win' : navigator.platform.indexOf('Mac') > -1 ? 'mac' : 'other');
  
  // Get video
  var video = $('#demo')[0];
  
  // Toggle windows items
  if (platform == 'win') {
    $('.win').show();
    $('.mac').hide();
    video.src = '/videos/demo-windows.mp4';
  } else {
      window.optimizely.push(["activate", 2845060113]);
  }
  
  // Handle video
  video.addEventListener("timeupdate", function(){
    if(this.currentTime >= 2.45 && this.currentTime < 3) {
      this.pause();
      $('.play').fadeIn();
    } else {
      $('.play').fadeOut();
    }
  });
  
  video.onended = function() {
    $('.play').fadeIn();
  }
  
  $('.play').click(function() {
    client.addEvent("site.watched_video",  { platform: platform }, function(err, res){ if (err) { console.log(err) }});
    video.currentTime = 3;
    video.play();
  });
  
  // Track pageview
  var client = new Keen({
    projectId: "54cb9a9959949a70595863a7",
    writeKey: "e984f7a6787daca6eb212ec9621b5e6ab6743e7f4d7dfede60ec3833beac56c74e4d73c0f266b149e6539e304f96698c4b37ec6c8bcfdc80ff5ec0c36044cc6f89550fbfd6c0ea2cd217d186bc1f205a03b227d192af4cdfad503f692fc7b236865cc2201d4260e4f72df53a93b39787",
    protocol: "https",
    host: "api.keen.io/3.0",
    requestType: "jsonp"
  });
  
  var pageView = {
    id: Math.uuid(),
    page: window.location.href,
    time: new Date().toISOString(),
    referrer: document.referrer,
    agent: window.navigator.userAgent,
    platform: platform
  };
  
  client.addEvent("site.page_view", pageView, function(err, res){ if (err) { console.log(err) }});
  
  // Track download
  $('.download-btn').click(function() {
    client.addEvent("site.downloaded_app", { platform: platform }, function(err, res){ if (err) { console.log(err) }});
  });
});