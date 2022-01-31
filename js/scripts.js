// business logic//
$(document).ready(function() {
  $('form#q').submit(function(event) {
    const outcome = $('input:radio[name=choice4]:checked').val();
    
    
// userface logic//

    if (outcome === 'value1') { 
      $('#Result1').show();
      $('#Result2').hide();
      $('#Result3').hide();
    } else if (outcome === 'value2') {
      $('#Result2').show();
      $('#Result3').hide();
      $('#Result1').hide(); 
    } else {
      $('#Result3').show();
      $('#Result2').hide();
      $('#Result1').hide();
    }
      

    event.preventDefault();
  });
});