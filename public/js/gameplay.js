function playOn(callback){
  // logic = new Logic
  var entry = $('#inputz').val().toUpperCase();
  var store_dict = localStorage.getItem('dict');
  var dict = JSON.parse(store_dict);
  $("#inputz").val("")
  // var jumps = parseInt($("#jumps").text())
  var jumps = parseInt($("#jumps").data("j"))
  var score = parseInt($("#score").data("s"))
  // var score = parseInt($("#score").text())
  if (entry === "J"  && jumps>0){
    Animate.shift(1)
    addScore(1)
    jumps--
    score++
    $("#jumps").data("j",jumps)
    View.updateJ()
    // $("#score").text(score)
    return
  }
  if (dict[entry]){
    $('#statusz').text("Real word")

    var nextFive = $("#hidestring").data('hs').substring(0,5).toUpperCase()
    currentLogic = new logic(entry,nextFive)
    addScore(currentLogic.shiftLength())
    Animate.shift(currentLogic.shiftLength())
    jumps += currentLogic.addedJumps()
    // $("#jumps").text(jumps)
    $("#jumps").data("j",jumps)
    View.updateJ()

  }

  else{
      $('#statusz').text("Fake word")
    }
  // callback();
}




function checkForWin(){
  var score = parseInt($("#score").data("s"))
  // formData = {test: "string"}
  if (score >= 50) {
    return true
  }else {
    return false
    }
}

function addScore(integer){
  console.log("in add score")

  $('#score-container').append("<div class='score-points'>+"+integer+"</div>")
  // $('#score').remove()
    new_score = $('#score').data("s") + integer
    $('#score').data("s",new_score)
    console.log(integer)
    View.updateS()
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

