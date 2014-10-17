function playOn(){
  // logic = new Logic
  var entry = $('#inputz').val().toUpperCase();
  var store_dict = localStorage.getItem('dict');
  var dict = JSON.parse(store_dict);
  if (dict[entry]){
    $('#statusz').text("Real word")
    var shift_length = Logic.analyze(entry)
    shift(shift_length);}
  else{
      $('#statusz').text("Fake word")
    }
  $("#inputz").val("")
}

$(document).ready(function() {
  $( "#formz" ).submit(function( event ) {
  event.preventDefault()
  playOn()
  })
});




