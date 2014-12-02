var Global = {
  goal: getGoal(),
  jumps: 0,
  score: 0,
  startTime: 0,
  highScore: false,
  dict: {}
}

$.get( "/dictionary5.txt", function( txt ) {
    var words = txt.split( "\n" )
    for ( var i = 0; i < words.length; i++ ) {
        Global.dict[words[i].trim()] = true
    }
  })



$(document).ready(function() {
  initialSetup()
  setKeyEvents()
  Global.startTime = new Date()

  $( "#formz" ).submit(function( event ) {
    event.preventDefault()
    playOn()
    regenerateSmallString()
    if (checkForWin()) winGame()
  })
})

function winGame(){

  var endTime = new Date()
  Global.rawTime = Math.round((endTime - Global.startTime)*(1/100))
  var finalTime = Global.rawTime/10

  $.ajax({
    url: '/hs_check',
    type: 'GET',
    data: {time: Global.rawTime,goal:Global.goal}
  })
  .done(function(response) {
    if (response === "true") Global.highScore = true
  })

  $('#statusz').text("Final Time: "+finalTime+" seconds")
  $( "#formz" ).off()
  $( "#inputz" ).off()
  $( "#inputz" ).prop( "disabled", true )

  setTimeout(function(){
    $.when($(".wordstring").fadeOut("slow")).done(function() {
      $(".wordstring").hide()
      $(".wordstring").text("WIN")
      // $('.wordstring').append("<center><a href='http://panicgram.herokuapp.com/play/25'><h4>PLAY AGAIN</h4></a></center>")
      $(".wordstring").fadeIn( 2000, function() {
        $( "#inputz" ).prop( "disabled", false )
        $( "#inputz" ).focus()

        // style final page depending on whether high score
        if (Global.highScore){
          $("#inputz").prop("placeholder", "HIGH SCORE! Enter name")
          $("#inputz").css("color", "#9B6785")
        } else {
          $("#inputz").prop("placeholder","Enter name")
          $("#inputz").css("color", "black")
        }
        
        // change form to submit form
        $( "#formz" ).prop("action","/score")
        $( "#formz" ).prop("method","post")
        $( "#formz" ).append("<input style='display:none' value="+Global.rawTime+" name='score'>")
        $( "#formz" ).append("<input style='display:none' value="+Global.goal+" name='goal'>")
        $( "#formz" ).append("<input id='temp-submit' type='submit' style='position: absolute; left: -9999px'>")
        $( "#inputz" ).prop("name","username")

        // Prevent double form submission
        $( "#formz" ).submit(function( event ) {$('#temp-submit').remove()})
        })
    })
}, 500)
}

function getGoal(){
  if (parseInt(document.URL.slice(-2))===25) return 25
  return 100

}


