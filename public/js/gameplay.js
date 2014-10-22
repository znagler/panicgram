function playOn(callback){
  // logic = new Logic
  var entry = $('#inputz').val().toUpperCase();
  var store_dict = localStorage.getItem('dict');
  var dict = JSON.parse(store_dict);
  $("#inputz").val("")
  var jumps = parseInt($("#jumps").text())
  var score = parseInt($("#score").text())
  if (entry === "J"  && jumps>0){
    Animate.shift(1)
    jumps--
    score++
    $("#jumps").text(jumps)
    $("#score").text(score)
    return
  }
  if (dict[entry]){
    $('#statusz').text("Real word")
    var nextFive = $('#hidestring').text().substring(0,5).toUpperCase()
    currentLogic = new logic(entry,nextFive)
    // var shift_length = Logic.analyze(entry,next_five)
    Animate.shift(currentLogic.shiftLength())
    score = score + currentLogic.shiftLength()
    console.log(score)
    $("#score").text(score)
    jumps += currentLogic.addedJumps()
    $("#jumps").text(jumps)

  }

  else{
      $('#statusz').text("Fake word")
    }
  // callback();
}




function checkForWin(){
  var score = parseInt($("#score").text())
  // formData = {test: "string"}
  if (score >= 25) {
    return true
  }else {
    return false
    }
}
    // $('#wordstring').text("WINNN")

    // Animate.shift(5)

    // $('#statusz').html(
    //   "<p>You win</p><form><input id='submission' placeholder='name'><input type='submit'></form>"
    //   )

    //   $( "#submission" ).submit(function( event ) {
    //     event.preventDefault();
    //     formData = {"username": $( "#submission" ).val()}
    //     $.ajax({
    //       url: '/win',
    //       type: 'POST',
    //       data: formData
    //     })
    //     .done(function(response) {
    //       console.log(response);
    //     })

    //   });

