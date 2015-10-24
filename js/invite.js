$(function(){
  var $inviteSignupForm = $('#invite-signup');
  var $inviteSigninForm = $('#invite-signin');
  var signupAction = $inviteSignupForm.attr('action');
  var signinAction = $inviteSigninForm.attr('action');
  var invite = $inviteSignupForm.attr('action').replace('/users', '/invite/');
  var code = getParam('code');
  var id;

  // load team name and email from bulldog
  $.ajax({
    type: 'GET',
    url: invite + code
  }).done(function(data, status, xhr){
    id = data.id
    // account for org invites without an email attached
    if (data.email) {
      $inviteSignupForm.find('input.email').val(data.email);
    }

    // account for older invites without an org name attached
    if (data.organization_name) {
      $('.team-name').html('<strong>'+ data.organization_name +'</strong>');
    }
  });

  $('#invite-signup-link').click(function(ev){
    ev.preventDefault();
    $('#invite-signin').hide();
    $('#invite-signup').show();
    $('#signup-invite-success-text').show();
    $('#signin-invite-success-text').hide();
  });

  $('#invite-signin-link').click(function(ev){
    ev.preventDefault();
    $('#invite-signin').show();
    $('#invite-signup').hide();
    $('#signup-invite-success-text').hide();
    $('#signin-invite-success-text').show();
  });

  $inviteSignupForm.on('submit', function(ev){
    ev.preventDefault();

    $.ajax({
      type: 'POST',
      url: signupAction,
      data: {
        email: $inviteSignupForm.find('input.email').val(),
        first_name: $inviteSignupForm.find('input.first-name').val(),
        last_name: $inviteSignupForm.find('input.last-name').val(),
        password: $inviteSignupForm.find('input.password').val(),
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

  $inviteSigninForm.on('submit', function(ev){
    ev.preventDefault();

    $.ajax({
      type: 'POST',
      url: signinAction,
      data: {
        email: $inviteSigninForm.find('input.email').val(),
        password: $inviteSigninForm.find('input.password').val(),
        device_id: 'account-area'
      }
    }).fail(function(xhr, status, error){
      $(".banner").hide();
      $(".banner.error").text(xhr.responseJSON.params.message).show();
    }).done(function(data, status, xhr){
      $.ajax({
        type: "POST",
        url: $inviteSigninForm.data('accept-action'),
        processData: false,
        contentType: 'application/json',
        processData:false,
        data: '{ "id": "' + id + '"}',
        beforeSend: function (xhr) {
          xhr.setRequestHeader(
            'Authorization',
            'Basic ' + btoa(data.token + ':password'));
        }
      }).done(function(data, status, xhr){
        $(".banner").hide();
        $('section').addClass('flipped');
      }).fail(function(xhr, status, error){
        $(".banner").hide();
        $(".banner.error").text(xhr.responseJSON.message).show();
      });
    });
  });
});
