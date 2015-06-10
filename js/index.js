$(function(){
  var env = window.location.href.indexOf('docker:5000') > -1 ? 'dev' : 'prod';
  
  if (env == 'dev') {
    var keen_project_id = '54cb8b0e46f9a73b4b13f4f7';
    var keen_write_key = 'ca31410e622e6ce3b25213a3e13a1a5b9f63e172b135ffafb65fa93e975fb2d454f74353fc99be542979813fe24d7c93a4d988e6fe344ed2b5b54fa20a88c543624fdec2b865bf86a28f17d2e7d3dba74fecd63a4f6dad3c388a9ef83b23a8a0c3137ad3552b4e26f7fb9e5e96d157d3';
  } else {
    var keen_project_id = '54cb9a9959949a70595863a7';
    var keen_write_key = 'e984f7a6787daca6eb212ec9621b5e6ab6743e7f4d7dfede60ec3833beac56c74e4d73c0f266b149e6539e304f96698c4b37ec6c8bcfdc80ff5ec0c36044cc6f89550fbfd6c0ea2cd217d186bc1f205a03b227d192af4cdfad503f692fc7b236865cc2201d4260e4f72df53a93b39787';
  }
  
  // Detect platform
  var platform = getParam('platform') || (navigator.platform.indexOf('Win') > -1 ? 'win' : navigator.platform.indexOf('Mac') > -1 ? 'mac' : 'other');
  
  // Get video
  var video = $('#video')[0];
  var video_mobile = $('#video-mobile')[0];
  
  // Toggle windows items
  if (platform == 'win') {
    $('.win').show();
    $('.mac').hide();
    video.src = '/videos/windows.mp4';
    video_mobile.src = '/videos/windows.mp4';
    video.poster = '/images/laptop-windows.png';
    video_mobile.poster = '/images/laptop-windows.png';
  } else {
    window.optimizely.push(["activate", 3029760201]);
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
    projectId: keen_project_id,
    writeKey: keen_write_key,
    protocol: "https",
    host: "api.keen.io/3.0",
    requestType: "jsonp"
  });
  
  // Separate referrer site and params
  var url = document.referrer;
  var referrer = url.split( '?' );
  var referrer_site = referrer[0] || url;
  var referrer_params = referrer[1] || '';
  
  var details = {
    id: Math.uuid(),
    page: window.location.href,
    time: new Date().toISOString(),
    referrer: referrer_site,
    referrer_params: referrer_params,
    agent: window.navigator.userAgent,
    platform: platform
  };
  
  client.addEvent("site.page_view", details);
  
  // Track download
  $('.download-btn').click(function() {
    client.addEvent("site.downloaded_app", details);
  });
  
  $(".button-win").click(function() {
    $("#email").focus();
  });
});
