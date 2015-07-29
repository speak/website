$(function(){
  var $demo        = $("#app-demo");
  var $big_video   = $("#big-video")[0];
  var $small_video = $("#small-video")[0];  
  var playhead     = 0;
  var animations   = {
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
      init: function() {
        if($big_video) {
          $big_video.play();
          $small_video.play();
        }
      }
    },
    "video-show-toolbar":           800,
    "mouse-hover-end-call":         7200,
    "mouse-click-end-call-on":      1000,
    "mouse-click-end-call-off":     200,
    "video-fade-out":               200,
    "last-frame": {
      delay: 600,
      init: function() {
        animationEnded();
      }
    }
  }

  function startAnimations() {
    for (var name in animations) {
      var delay = (typeof animations[name].delay === "undefined") ? animations[name] : animations[name].delay;
      playhead = playhead+delay;
      setupAnimation(name, playhead);
    }
  }

  // Has to be split into a diff function for timeout to work
  function setupAnimation(name, delay) {
    setTimeout(function() { 
      $demo.addClass(name); 
      if (typeof animations[name].init === "function")
        animations[name].init();
    }, delay);
  }
  
  function animationEnded() {
    // Reset videos
    $big_video.pause()
    $small_video.pause();
    $big_video.currentTime = 0;
    $small_video.currentTime = 0;
    
    // Reset playhead
    playhead = 0;
    
    // Reset animations
    $demo.attr('class', 'test');
    startAnimations();
  }
  
  startAnimations();
});
