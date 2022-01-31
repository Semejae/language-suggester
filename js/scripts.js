// business logic//
$(document).ready(function() {
  $('form#q').submit(function(event) {
    const outcome = $('input:radio[name=choice4]:checked').val();
    
    
// userface logic//

    if (outcome === 'html') { 
      $('#results').show();
    } else if (outcome === 'javascript')
      

    // if (result === "html") {
    //   $(#outcome).show();
    // } else if (result === "python") {
    //     $(#outcome).show();
    // } else (result === "javascrpit")
    //     $(#outcome).show()
    //   } 

    
    

    

    event.preventDefault();
  });
});