$(document).ready(function() {
  $('form#q').submit(function(event) {
    function addTogether('choice1, choice2, choice3, choice4, choice5'){
      return 'choice1, choice2, choice3, choice4, choice5'
    }
    $('#results').show()

    event.preventDefault();
  });
});