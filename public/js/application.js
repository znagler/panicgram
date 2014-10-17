function playOn(){
  // logic = new Logic
  var entry = $('#inputz').val().toUpperCase();
  var store_dict = localStorage.getItem('dict');
  var dict = JSON.parse(store_dict);
  $("#inputz").val("")
  if (entry === "J"){
    Animate.shift(1)
    return
  }
  if (dict[entry]){
    $('#statusz').text("Real word")
    var next_five = $('#hidestring').text().substring(0,5).toUpperCase()
    var shift_length = Logic.analyze(entry,next_five)
    Animate.shift(shift_length);}
  else{
      $('#statusz').text("Fake word")
    }
}

$(document).ready(function() {
  $( "#formz" ).submit(function( event ) {
  event.preventDefault()
  playOn()
  })
});




