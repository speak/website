$(function(){
  var $form = $('#invite-accept');
  var action = $form.attr('action');
  var invite = $form.attr('action').replace('/users', '/invite/');
  var code = getParam('code');
  
  // load team name and email from bulldog
  $.ajax({
    type: 'GET',
    url: invite + code
  }).done(function(data, status, xhr){
  
    $form.find('input.email').val(data.email);
    
    // account for older invites without an org name attached
    if (data.organization_name) {
      $('.team-name').html('<strong>'+ data.organization_name +'</strong>');
    }
  });
  
  $form.on('submit', function(ev){
    ev.preventDefault();
    
    $.ajax({
      type: 'POST',
      url: action,
      data: {
        email: $form.find('input.email').val(),
        first_name: $form.find('input.first-name').val(),
        last_name: $form.find('input.last-name').val(),
        password: $form.find('input.password').val(),
        invite_code: code
      }
    }).fail(function(xhr, status, error){
      $(".banner").hide();
      $(".banner.error").text(xhr.responseJSON.params.message).show();
    }).done(function(data, status, xhr){
      $(".banner").hide();
      $('section').addClass('flipped');
    });
  });
});
