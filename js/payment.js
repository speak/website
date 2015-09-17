$(function(){

  var $inviteSigninForm = $('#invite-signin');
  var signinAction = $inviteSigninForm.attr('action');
  var stripeToken;

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
      alert("SIGN IN FAILED")
    }).done(function(data, status, xhr){
      console.log(data)
      token = data.token;
    });
  });

  var handler = StripeCheckout.configure({
    key: 'pk_test_qmcKDnNPg3ucgPITNl09orYa',
    image: '/img/documentation/checkout/marketplace.png',
    locale: 'auto',
    token: function(token) {
      console.log("stripe token is: ")
      console.log(token)
      $.ajax({
        type: "POST",
        url: "{{site.manuel_url}}" + "/billing/subscribe",
        processData: false,
        contentType: 'application/json',
        processData:false,
        data: '{ "token": "' + token + '"}',
        beforeSend: function (xhr) {
          xhr.setRequestHeader(
            'Authorization',
            'Basic ' + btoa(token + ':password'));
        }
      }).done(function(data, status, xhr){
        console.log("success")
      }).fail(function(xhr, status, error){
        console.log("error")
        console.log(error)
      });
    }
  });

  $('#customButton').on('click', function(e) {
    // Open Checkout with further options
    handler.open({
      name: 'Speak',
      description: '2 widgets',
      amount: 2000
    });
    e.preventDefault();
  });

  // Close Checkout on page navigation
  $(window).on('popstate', function() {
    handler.close();
  });
});

