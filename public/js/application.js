var Global = {
  goal: parseInt(document.URL.slice(-2)),
  jumps: 0,
  score: 0,
  startTime: 0
}

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
  $('#statusz').text("Final Time: "+finalTime+" seconds")
  $( "#formz" ).off()
  $( "#inputz" ).off()
  $( "#inputz" ).prop( "disabled", true )

  setTimeout(function(){
    $.when($(".wordstring").fadeOut("slow")).done(function() {
      $(".wordstring").hide()
      $(".wordstring").text("WIN")
      $('.wordstring').append("<center><a href='http://panicgram.herokuapp.com/play/25'><h4>PLAY AGAIN</h4></a></center>")
      $(".wordstring").fadeIn( 2000, function() {
        $( "#inputz" ).prop( "disabled", false )
        $( "#inputz" ).focus()
        $("#inputz").prop("placeholder", "Enter username")
        $("#inputz").css("color", "red")
        $("#formz").addClass( "username" )

          // change form to submit form
          $( "#formz" ).prop("action","/test_route")
          $( "#formz" ).prop("method","post")
          $( "#formz" ).append("<input style='display:none' value="+Global.rawTime+" name='score'>")
          $( "#formz" ).append("<input id='temp-submit' type='submit' style='position: absolute; left: -9999px'>")
          $( "#inputz" ).prop("name","username")

          // Prevent double form submission
          $( "#formz" ).submit(function( event ) {$('#temp-submit').remove()})
        })
    })
}, 500)
}


