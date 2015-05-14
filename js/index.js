$(function(){
  var env = window.location.href.indexOf('docker:5000') ? 'dev' : 'prod';
  
  if (env == 'dev') {
    var keen_project_id = '54cb8b0e46f9a73b4b13f4f7';
    var keen_write_key = 'ca31410e622e6ce3b25213a3e13a1a5b9f63e172b135ffafb65fa93e975fb2d454f74353fc99be542979813fe24d7c93a4d988e6fe344ed2b5b54fa20a88c543624fdec2b865bf86a28f17d2e7d3dba74fecd63a4f6dad3c388a9ef83b23a8a0c3137ad3552b4e26f7fb9e5e96d157d3';
  } else {
    var keen_project_id = '538e19e836bf5a1a3b000000';
    var keen_write_key = '9b90afba07c34ace6d526abeb6a5cde467ee5ea9afff0f4d61b293ae89073c3ec1c66670bac14c73b6852465cabb0203a203aa8c199ee60ac94778685edbbb9f6d3220c3cb13920284b9f5dca8e4a03d929991865367a6424935d4ca890d84268daf4921012aeeeeecc1b5486fbba0ab';
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
    video.src = '/videos/demo-windows.mp4';
    video_mobile.src = '/videos/demo-windows.mp4';
    video.poster = '/images/laptop-windows.png';
    video_mobile.poster = '/images/laptop-windows.png';
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
  
  var pageView = {
    id: Math.uuid(),
    page: window.location.href,
    time: new Date().toISOString(),
    referrer: referrer_site,
    referrer_params: referrer_params,
    agent: window.navigator.userAgent,
    platform: platform
  };
  
  client.addEvent("site.page_view", pageView, function(err, res){ if (err) { console.log(err) }});
  
  // Track download
  $('.download-btn').click(function() {
    client.addEvent("site.downloaded_app", { platform: platform }, function(err, res){ if (err) { console.log(err) }});
  });
});