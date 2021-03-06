function playOn(callback){
  var entry = $('#inputz').val().toUpperCase()
  $("#inputz").val("")
  Global.jumps = parseInt($("#jumps").data("j"))
  var score = parseInt($("#score").data("s"))

  if (entry === "J"  && Global.jumps > 1){
    Global.currentlyUsingAllJumps = true
    jump()
    jumpInterval = setInterval(function(){ 
      jump() 
      regenerateSmallString()
      if (Global.jumps === 0) {
        clearInterval(jumpInterval)
        Global.currentlyUsingAllJumps = false
        if (checkForWin()) winGame()
      }
    }, 150)
    return
  }

  if (entry === "J"  && Global.jumps === 1){
    jump()
    return
  }
  if (Global.dict[entry]){
    Global.words++
    validWord(entry)
  }
  else if ((entry === "J" ) && Global.jumps === 0){
    $('#statusz').text("no jumps")
  }
  else if (entry.length <5) {
    $('#statusz').text("too short")
  }
  else {
    $('#statusz').text("not a word")
  }
}

function addScore(integer){
  var color = ""
  if (integer === 2) color = "#79C0EE"
  if (integer === 3) color = "#65FF00"
  if (integer === 5) color = "#FF1A75"

  $('#score-container').append("<div class='score-points'>+"+integer+"</div>")
  $('.score-points').css("color",color)
  new_score = $('#score').data("s") + integer
  $('#score').data("s",new_score)
  View.updateS()
}

function animateNewJumps(integer){
  $('#jump-container').append("<div class='score-jumps' style='color: #FF1A75'>+"+integer+"</div>")
}

function validWord(entry){
  $('#statusz').text("nice one")
  var nextFive = $("#hidestring").data('hs').substring(0,5).toUpperCase()
  var currentLogic = new logic(entry,nextFive)
  if (currentLogic.shiftLength() >= 1){
    Global.currentlyShifting = true
    addScore(currentLogic.shiftLength())
    Animate.shift(currentLogic.shiftLength())
    var newJumps = currentLogic.addedJumps()
    if (newJumps > 0){
      animateNewJumps(newJumps)
    }
    Global.jumps += newJumps
    $("#jumps").data("j",Global.jumps)
    View.updateJ()
    return
  }
  $('#statusz').text("no letters earned")
}

function jump(){
    regenerateSmallString()
    Global.currentlyShifting = true
    Animate.shift(1)
    addScore(1)
    Global.jumps--
    $("#jumps").data("j",Global.jumps)
    View.updateJ()
}

