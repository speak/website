$(function(){
  if (document.referrer.match(/sqwiggle\.com/)) {
    $(".sqwiggle-banner").show();
  }

  $(".sqwiggle-banner .close").click(function(ev) {
    ev.preventDefault();
    $(".sqwiggle-banner").slideUp();
  });

  client.addEvent("site.page_view", getClientDetails());
});