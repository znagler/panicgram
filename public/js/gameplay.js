function playOn(callback){
  var entry = $('#inputz').val().toUpperCase();
  var store_dict = localStorage.getItem('dict');
  var dict = JSON.parse(store_dict);
  $("#inputz").val("")
  Global.jumps = parseInt($("#jumps").data("j"))
  var score = parseInt($("#score").data("s"))
  if (entry === "J"  && Global.jumps>0){
    Animate.shift(1)
    addScore(1)
    Global.jumps--
    score++
    $("#jumps").data("j",Global.jumps)
    View.updateJ()
    return
  }
  if (dict[entry]){
    validWord(entry)
  }
  else if (entry.length <5) {
      $('#statusz').text("Too short")
    }
  else {
      $('#statusz').text("Fake word")
  }
}




function checkForWin(){
  var score = parseInt($("#score").data("s"))
  if (score >= 10) {
    return true
  }else {
    return false
    }
}

function addScore(integer){
    var r=0
    var g=0
    var b=0
    if (integer === 2) b=255;
    if (integer === 3) r=255;
    if (integer === 5) g=r=255;

    $('#score-container').append("<div class='score-points' style='color: rgba("+r+","+g+","+b+", 0.9)'>+"+integer+"</div>")
    new_score = $('#score').data("s") + integer
    $('#score').data("s",new_score)
    View.updateS()
}

function animateNewJumps(integer){
  var r=0
    var g=0
    var b=0
    if (integer === 1) b=255;
    if (integer === 2) r=255;
    $('#jump-container').append("<div class='score-jumps' style='color: rgba("+r+","+g+","+b+", 0.9)'>+"+integer+"</div>")

}

function validWord(entry){
    $('#statusz').text("Real word")
    var nextFive = $("#hidestring").data('hs').substring(0,5).toUpperCase()
    var currentLogic = new logic(entry,nextFive)
    if (currentLogic.shiftLength() >= 1){
    addScore(currentLogic.shiftLength())
    Animate.shift(currentLogic.shiftLength())
    var newJumps = currentLogic.addedJumps()
    if (newJumps > 0){
    animateNewJumps(newJumps)
    }
    Global.jumps += newJumps
    $("#jumps").data("j",Global.jumps)
    View.updateJ()
    }

}

