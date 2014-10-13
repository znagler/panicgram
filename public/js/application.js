  $(document).ready(function() {

  function setstatus() {
    console.log("real wwword");
    $('#statusz').append("Real word")
  }

  $( "#formz" ).submit(function( event ) {
    console.log("word submitted...")
  var entry = $('#inputz').val().toUpperCase();
  console.log(entry)
  var store_dict = localStorage.getItem('dict');
  console.log("storage test 2...");
  var dict = JSON.parse(store_dict);

  if (dict[entry] === true){
    setstatus();
  }
  })


});




