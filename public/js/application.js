function playOn(){
  // logic = new Logic
  var entry = $('#inputz').val().toUpperCase();
  var store_dict = localStorage.getItem('dict');
  var dict = JSON.parse(store_dict);
  $("#inputz").val("")
  var jumps = parseInt($("#jumps").text())
  if (entry === "J"  && jumps>0){
    Animate.shift(1)
    jumps--
    $("#jumps").text(jumps)
    return
  }
  if (dict[entry]){
    $('#statusz').text("Real word")
    var nextFive = $('#hidestring').text().substring(0,5).toUpperCase()
    currentLogic = new logic(entry,nextFive)
    // var shift_length = Logic.analyze(entry,next_five)
    Animate.shift(currentLogic.shiftLength())
    jumps += currentLogic.addedJumps()
    $("#jumps").text(jumps)

  }

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




