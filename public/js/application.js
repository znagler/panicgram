
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

    Global.endTime = new Date()
    console.log((Global.endTime - Global.startTime) * (1/1000))
    $('#statusz').text("Final Time: "+(Math.round((Global.endTime - Global.startTime) * (1/1000)))+" seconds")
    $( "#formz" ).off()
    $( "#formz" ).submit(function( event ) {
      event.preventDefault()
    });    
  setTimeout(function(){
    $.when($(".wordstring").fadeOut("slow")).done(function() {
        $( "#inputz" ).off()
        $(".wordstring").hide()
        $(".wordstring").text("WIN")
        $('.wordstring').append("<center><a href='http://panicgram.herokuapp.com/play/10'><h4>PLAY AGAIN</h4></a></center>")
        $(".wordstring").fadeIn( 2000, function() {
          $("#inputz").attr("placeholder", "Enter username")
          $("#inputz").css("color", "red")
          })
      })
  }, 500)
}


