
var Global = {
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

});


function winGame(){
  console.log("wtf")

    Global.endTime = new Date()
    var rawTime = Math.round((Global.endTime - Global.startTime)*(1/100))
    Global.finalTime = rawTime + (rawTime+"").slice(-1)
    $('#statusz').text("Final Time: "+Global.finalTime+" seconds")
    $( "#formz" ).off()
    $( "#inputz" ).off()
    $( "#inputz" ).prop( "disabled", true )

  setTimeout(function(){
    $.when($(".wordstring").fadeOut("slow")).done(function() {
        $(".wordstring").hide()
        $(".wordstring").text("WIN")
        $('.wordstring').append("<center><a href='http://panicgram.herokuapp.com/play/10'><h4>PLAY AGAIN</h4></a></center>")
        $(".wordstring").fadeIn( 2000, function() {
        $( "#inputz" ).prop( "disabled", false )
        $( "#inputz" ).focus()
          $("#inputz").attr("placeholder", "Enter username")
          $("#inputz").css("color", "red")
          $("#formz").addClass( "username" )

          $( "#formz" ).attr("action","/test_route")
          $( "#formz" ).attr("method","post")
          $( "#formz" ).append("<input style='display:none' value="+Global.finalTime+" name='score'>")
          $( "#formz" ).append("<input id='temp-submit' type='submit' style='position: absolute; left: -9999px'>")
          $( "#inputz" ).attr("name","username")
          $( "#formz" ).submit(function( event ) {
            $('#inputz').attr("readonly", true) 
            $('#temp-submit').remove()
          })
        })
      })
  }, 500)
}


