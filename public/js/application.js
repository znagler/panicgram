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

initialSetup()


$( "#inputz" ).keypress(function() {

    if ( (event.which == 74 || event.which == 106) && $( "#inputz" ).val().length == 0) {
     $( "#inputz" ).css("color","red")
  }
});


  $( "#inputz" ).keyup(function() {
    if ($( "#inputz" ).val().length >= 5){
      $( "#inputz" ).css("color","#34007F")
    }
    if ($( "#inputz" ).val().length <5 && $( "#inputz" ).val().toUpperCase()!="J"){
      $( "#inputz" ).css("color","gray")
    }


  });

  $( "#formz" ).submit(function( event ) {
  event.preventDefault()

  playOn()
  regenerateSmallString()

  // console.log($("#hidestring").text().length)
  })
});







