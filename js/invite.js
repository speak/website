$(function(){
  var $form = $('#invite-accept');
  var action = $form.attr('action');
  var code = getParam('code');
  var email = getParam('email');
  $form.find('input.email').val(email);
  
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
      $(".banner.success").text("Success! Now download the app.").show();
    });
  });
});