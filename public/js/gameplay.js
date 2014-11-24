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
    var newJumps = currentLogic.addedJumps()
    if (newJumps > 0){
    animateNewJumps(newJumps)
    }
    jumps += newJumps
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
  if (score >= 10) {
    return true
  }else {
    return false
    }
}

function addScore(integer){
  console.log("in add score")

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

function animateNewJumps(integer){
  console.log("animating jump...")
  var r=0
    var g=0
    var b=0
    if (integer === 1) b=255;
    if (integer === 2) r=255;

    $('#jump-container').append("<div class='score-jumps' style='color: rgba("+r+","+g+","+b+", 0.9)'>+"+integer+"</div>")

}

