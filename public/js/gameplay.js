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
    if (currentLogic.shiftLength() >= 1){
    addScore(currentLogic.shiftLength())
    Animate.shift(currentLogic.shiftLength())
    jumps += currentLogic.addedJumps()
    // $("#jumps").text(jumps)
    $("#jumps").data("j",jumps)
    View.updateJ()
    }

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
    // $('#score-container').
    //red -> 255,0,0
    //blue 0,0,255
    //yellow 255,255,0
    var r=0
    var g=0
    var b=0
    if (integer === 2) b=255;
    if (integer === 3) r=255;
    if (integer === 5) g=r=255;

    $('#score-container').append("<div class='score-points' style='color: rgba("+r+","+g+","+b+", 0.9)'>+"+integer+"</div>")
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

