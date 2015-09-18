$(function() {
  var initialValue = 10;
  var freq = "yearly";
  var value;
  
  var sliderTooltip = function(event, ui) {
    value = ui.value || initialValue;
    var target = ui.handle || $(".ui-slider-handle");
    var tooltip = '<div class="tooltip"><div class="tooltip-inner">' + value + ' Users</div><div class="tooltip-arrow"></div></div>';
    $(target).html(tooltip);
    calculatePlan();
  }
  
  $(".switch").click(function(ev) {
    ev.preventDefault();
    $($(".freq")[1]).text(freq);
    freq = (freq == "yearly") ? "monthly" : "yearly";
    $($(".freq")[0]).text(freq);
    calculatePlan();
  });
  
  var showEnterprise = function() {
    $(".enterprise-wrap").show();
    $(".plan-wrap").hide();
  }
  
  var hideEnterprise = function() {
    $(".enterprise-wrap").hide();
    $(".plan-wrap").show();
  }
  
  var calculatePlan = function() {
    var plan, price;
    
    switch (true) {
      case (value <= 3):
        plan = "Startup";
        price = 15;
        break;
        
      case (value <= 6):
        plan = "Funded";
        price = 30;
        break;
        
      case (value <= 10):
        plan = "Business";
        price = 50;
        break;
        
      case (value <= 20):
        plan = "Getting Big";
        price = 100;
        break;
        
      case (value <= 50):
        plan = "Enterprise";
        price = 250;
        break;
        
      case (value <= 100):
        plan = "Enterprise 2.0";
        price = 500;
    }
    
    if (value == 100) {
      showEnterprise();
    } else {
      hideEnterprise();
    }
    
    if (freq == "monthly") {
      price = Math.ceil(price + price*.1);
    }
    
    $(".plan-name").text(plan);
    $(".price").text(price);
  }
  
  $("#slider").slider({
    range: "min",
    min: 1,
    max: 100,
    value: initialValue,
    create: sliderTooltip,
    slide: sliderTooltip
  });
});