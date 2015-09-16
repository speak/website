---
---
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
    console.log('id is: ' + id)
    // account for org invites without an email attached
    if (data.email) {
      $inviteSignupForm.find('input.email').val(data.email);
    }

    // account for older invites without an org name attached
    if (data.organization_name) {
      $('.team-name').html('<strong>'+ data.organization_name +'</strong>');
    }
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
      // $(".banner").hide();
      // $('section').addClass('flipped');
      console.log(data)
      $.ajax({
        type: "POST",
        url: "{{site.manuel_url}}" + "/invite/accept",
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
        console.log('invite accepted'); 
      }).fail(function(xhr, status, error){
        console.log("error")
        console.log(error)
        console.log(xhr)
      });
    });
  });
});
