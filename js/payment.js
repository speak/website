$(function(){
  alert("foo")
  var handler = StripeCheckout.configure({
    key: 'pk_test_qmcKDnNPg3ucgPITNl09orYa',
    image: '/img/documentation/checkout/marketplace.png',
    locale: 'auto',
    token: function(token) {
      console.log("stripe token is: ")
      console.log(token)
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

