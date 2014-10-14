  $(document).ready(function() {

    function analyze(entry) {
      if (entry === true){
        eat_letters()
        $('#statusz').text("Real word")
      } else {
      $('#statusz').text("Fake word")
      }
    }


  function eat_letters(){
    console.log(document.cookie)

    string = $("#wordstring").text()
    $("#wordstring").text(string.substring(3))
    string = $("#hidestring").text()
    $("#hidestring").text(string.substring(3))





    $("#wordstring").css('marginLeft','750px');
    $("#wordstring").animate(
      {'marginLeft':"500px"},"slow");
    $("#wordstring").append(string.substring(5,8))


  }






  $( "#formz" ).submit(function( event ) {
    event.preventDefault()
    console.log("word submitted...")
  var entry = $('#inputz').val().toUpperCase();
  console.log(entry)
  var store_dict = localStorage.getItem('dict');
  console.log("storage test 2...");
  var dict = JSON.parse(store_dict);
  analyze(dict[entry]);
  $("#inputz").val("")


  })


});




