$('body').append("<center id='load'><br><br><br><br><br><br><br><br><br><br><br><br><br><br><h1>loading...</h1></center>")

var Global = {
  goal: getGoal(),
  jumps: 13,
  score: 0,
  startTime: 0,
  highScore: false,
  dict: {},
  currentlyShifting: false,
  currentlyUsingAllJumps: false,
  gameOverAnimationStarted: false,
  gameOverAnimationComplete: false,
  words: 0
}

$.get( "/dictionary5.txt", function( txt ) {
    var words = txt.split( "\n" )
    for ( var i = 0; i < words.length; i++ ) {
        Global.dict[words[i].trim()] = true
    }
  })

$(document).ready(function() {
  $('#load').remove()
  initialSetup()
  setKeyEvents()
  Global.startTime = new Date()

  $( "#formz" ).submit(function( event ) {

    if (!Global.gameOverAnimationComplete) (event.preventDefault())
    if (!Global.currentlyShifting && !Global.currentlyUsingAllJumps  && !Global.gameOverAnimationStarted){
      playOn()
      if (checkForWin()) winGame()
      regenerateSmallString()
    }

  })
})


function getGoal(){
  if (parseInt(document.URL.slice(-2))===25) return 25
  return 100
}
