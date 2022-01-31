// business logic//
$(document).ready(function() {
  $('form#q').submit(function(event) {
    const answer = $('input:radio[value]:checked').val();
    let outcome = answer
    
// userface logic//

    if (outcome === 'html') {
      $('#Result1').show();
      $('#Result2').hide();
      $('#Result3').hide();
    } else if (outcome ==='javascript') {
      $('#Results2').show();
      $('#Result1').hide();
      $('#Result3').hide(); 
    } else if (outcome === 'python') {
      $('#Result3').show();
    } 
    // else {
    //   alert('please click a bubble!')
    // }
      
    event.preventDefault();
  });
});