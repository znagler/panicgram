function playOn(){
  var entry = $('#inputz').val().toUpperCase();
  var store_dict = localStorage.getItem('dict');
  var dict = JSON.parse(store_dict);
  console.log(entry)
  analyze(dict[entry],entry);
  $("#inputz").val("")
}

$(document).ready(function() {
  $( "#formz" ).submit(function( event ) {
  event.preventDefault()
  playOn()
  })
});




