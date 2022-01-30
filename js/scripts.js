$(document).ready(function() {
  $('form#q').submit(function(event) {
    const result = $('input:radio[name=choice4]:checked').val();
    
    
    if (result === "html,python,javascript") {
      $(#outcome).show();
    }
    

    event.preventDefault();
  });
});