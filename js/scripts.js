$(document).ready(function() {
  $('form#q').submit(function(event) {
    let outcome = $('input:radio[value=html]:checked').val();
    let outcome = $('input')
    

    if (outcome) { 
      

    // if (result === "html") {
    //   $(#outcome).show();
    // } else if (result === "python") {
    //     $(#outcome).show();
    // } else (result === "javascrpit")
    //     $(#outcome).show()
    //   } 

    $('#outcome').text(results)
    $('#results').show();

    }

    event.preventDefault();
  });
});