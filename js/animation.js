$(function(){
  var $demo = $(".app-demo")
  $demo.addClass('bounce-in');

  setTimeout(function() { $demo.addClass('mouse-fade-in') },           2000);
  setTimeout(function() { $demo.addClass('mouse-move-tooltip') },      2000);
  setTimeout(function() { $demo.addClass('face-active') },             2300);
  setTimeout(function() { $demo.addClass('tooltip-fade-in') },         3100);
  setTimeout(function() { $demo.addClass('mouse-hover-tooltip') },     4000);
  setTimeout(function() { $demo.addClass('highlight-video-call') },    4200);
  setTimeout(function() { $demo.addClass('tooltip-fade-out') },        5400);
  setTimeout(function() { $demo.addClass('bounce-out') },              6000);
  setTimeout(function() { $demo.addClass('video-fade-in') },           6000);
  setTimeout(function() { $demo.addClass('video-show-toolbar') },      6800);
  setTimeout(function() { $demo.addClass('video-feed-fade-in') },      6800);
  setTimeout(function() { $demo.addClass('mouse-hover-video-on') },    7500);
  setTimeout(function() { $demo.addClass('mouse-click-video-on') },    8700);
  setTimeout(function() { $demo.removeClass('mouse-click-video-on') }, 8900);
  setTimeout(function() { $("#video-toolbar li a.video").addClass('enabled') }, 8900);
  setTimeout(function() { $demo.addClass('mouse-hover-end-call') },    12000);
  setTimeout(function() { $demo.addClass('mouse-click-end-call') },    13000);
  setTimeout(function() { $demo.removeClass('mouse-click-end-call') },    13200);
  setTimeout(function() { $demo.addClass('video-fade-out') },      13200);

});