$(function(){
  var token = getParam('reset_token');
  if(!token) window.location.href = "/";
    
  var $form = $('#password-reset');
  var action = $form.attr('action');

  $form.on('submit', function(ev){
    $.ajax({
      type: 'POST',
      url: (action + '/' + token),
      data: {
        password: $form.find("#password").val(),
        password_confirmation: $form.find("#password_confirmation").val()
      }
    }).fail(function(xhr, status, error){
      $(".banner").hide();
      $(".banner.error").text(xhr.responseJSON.params.message).show();
    }).done(function(data, status, xhr){
      $(".banner").hide();
      $(".banner.success").text("Great! Your password has been updated, you can now head on over to the app and log in.").show();
    });
  });
  }
});