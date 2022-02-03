// business logic//
$(document).ready(function() {
  $('form#questions').submit(function(event) {
    
    const myQuestion1 = $('input:radio[name=question1]:checked').val();
    const myQuestion2 = $('input:radio[name=question2]:checked').val();
    const myQuestion3 = $('input:radio[name=question3]:checked').val();
    const myQuestion4 = $('input:radio[name=question4]:checked').val();
    const myQuestion5 = $('input:radio[name=question5]:checked').val();

// userface logic//
    $('#R1').hide();
    $('#R2').hide();
    $('#R3').hide();
    if(myQuestion1 === 'Red'&& myQuestion2 === 'Build websites' ) {
      $('#R1').show();
    } else if(myQuestion1 === 'Blue' ) {
      $('#R2').show();
    } else if(myQuestion3 === 'Orange') {
      $('#R3').show(); 
    } else {
      alert('please click bubble!!!')
    }
    event.preventDefault();
  });
});