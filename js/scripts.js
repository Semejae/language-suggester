// business logic//
$(document).ready(function() {
  $('form#questions').submit(function(event) {
    
    const outcome = $('input:radio[name=choice]:checked').val();
    

    
// userface logic//

    if(outcome === 'Red') {
      $('#R1').show();
      $('#R2').hide();
      $('#R3').hide();
    } else if(outcome === 'Blue') {
      $('#R2').show();
      $('#R1').hide();
      $('#R3').hide(); 

    } else if(outcome === 'Orange') {
      $('#R3').show();
      $('#R2').hide();
      $('#R1').hide();

    } 
      else {
      alert('please click bubble!!!')

    }
    
    
    

    event.preventDefault();
    
    });
});