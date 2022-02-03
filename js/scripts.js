// business logic//
$(document).ready(function() {
  $('form#questions').submit(function(event) {
    
    const myQuestion1 = $('input:radio[name=question1]:checked').val();
    const myQuestion2 = $('input:radio[name=question2]:checked').val();
    const myQuestion3 = $('input:radio[name=question3]:checked').val();
    const myQuestion4 = $('input:radio[name=question4]:checked').val();
    const myQuestion5 = $('input:radio[name=question5]:checked').val();
    
// userface logic//
    
    if(array === '') {
      $('#R1').show();
      $('#R2').hide();
      $('#R3').hide();
      
    } else if(array === 'Blue') {
      $('#R2').show();
      $('#R1').hide();
      $('#R3').hide();
      
    } else if(array === 'Orange') {
      $('#R3').show();
      $('#R2').hide();
      $('#R1').hide();
      
    } else {
      alert('please click bubble!!!')
    }
    
    
    
    

    event.preventDefault();
    
    });
});