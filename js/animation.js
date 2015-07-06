$(function(){
  var $demo      = $(".app-demo");
  var playhead   = 0;
  var animations = {
    "bounce-in": 0,
    "mouse-fade-in":                2000,
    "mouse-move-tooltip":           0,
    "face-active":                  300,
    "tooltip-fade-in":              800,
    "mouse-hover-tooltip":          900,
    "highlight-video-call":         200,
    "tooltip-fade-out":             1200,
    "bounce-out":                   600,
    "video-fade-in":{
      delay: 600,
      onComplete: function() { 
        $('#big-video')[0].play();
        $('#small-video')[0].play();
      }
    },
    "video-show-toolbar":           800,
    "mouse-hover-end-call":         7200,
    "mouse-click-end-call-on":      1000,
    "mouse-click-end-call-off":     200,
    "video-fade-out":               200
  }
  
  function setupAnimation(name, delay) {
    if (typeof animations[name].onComplete === "function")
      animations[name].onComplete();
    
    setTimeout(function() { $demo.addClass(name); }, delay);
  }
  
  for (var name in animations) {
    var delay = (typeof animations[name].delay === "undefined") ? animations[name] : animations[name].delay;
    playhead = playhead+delay;
    setupAnimation(name, playhead);
  }
});