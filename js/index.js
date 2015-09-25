$(function(){
  var env = (window.location.href.indexOf('docker') > -1 || window.location.href.indexOf('localhost') > -1) ? 'dev' : 'prod';

  if (env == 'dev') {
    var keen_project_id = '54cb8b0e46f9a73b4b13f4f7';
    var keen_write_key = 'ca31410e622e6ce3b25213a3e13a1a5b9f63e172b135ffafb65fa93e975fb2d454f74353fc99be542979813fe24d7c93a4d988e6fe344ed2b5b54fa20a88c543624fdec2b865bf86a28f17d2e7d3dba74fecd63a4f6dad3c388a9ef83b23a8a0c3137ad3552b4e26f7fb9e5e96d157d3';
  } else {
    var keen_project_id = '54cb9a9959949a70595863a7';
    var keen_write_key = 'e984f7a6787daca6eb212ec9621b5e6ab6743e7f4d7dfede60ec3833beac56c74e4d73c0f266b149e6539e304f96698c4b37ec6c8bcfdc80ff5ec0c36044cc6f89550fbfd6c0ea2cd217d186bc1f205a03b227d192af4cdfad503f692fc7b236865cc2201d4260e4f72df53a93b39787';
  }

  if (document.referrer.match(/sqwiggle\.com/)) {
    $(".sqwiggle-banner").show();
  }

  $(".sqwiggle-banner .close").click(function(ev) {
    ev.preventDefault();
    $(".sqwiggle-banner").slideUp();
  });
  
  $("form.linux .download-btn").click(function(ev) {
    ev.preventDefault();
    $("form.linux").submit();
  });

  // Track pageview
  client = new Keen({
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

  details = {
    id: Math.uuid(),
    page: window.location.href,
    time: new Date().toISOString(),
    referrer: referrer_site,
    referrer_params: referrer_params,
    agent: window.navigator.userAgent,
    platform: platform
  };

  client.addEvent("site.page_view", details);
});