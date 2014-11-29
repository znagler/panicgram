
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


  $( ".username" ).submit(function( event ) {
  console.log("test")
  })




});


function winGame(){

    Global.endTime = new Date()
    Global.finalTime = Math.round((Global.endTime - Global.startTime) * (1/1000))
    console.log(Global.finalTime)
    $('#statusz').text("Final Time: "+Global.finalTime+" seconds")
    $( "#formz" ).off()
    // $( "#formz" ).submit(function( event ) {
    //   event.preventDefault()
    // });    
  setTimeout(function(){
    $.when($(".wordstring").fadeOut("slow")).done(function() {
        $( "#inputz" ).off()
        $(".wordstring").hide()
        $(".wordstring").text("WIN")
        $('.wordstring').append("<center><a href='http://panicgram.herokuapp.com/play/10'><h4>PLAY AGAIN</h4></a></center>")
        $(".wordstring").fadeIn( 2000, function() {
          $("#inputz").attr("placeholder", "Enter username")
          $("#inputz").css("color", "red")
          $("#formz").addClass( "username" )
          $( "#formz" ).attr("action","/test_route")
          $( "#formz" ).attr("method","post")
          $( "#formz" ).append("<input style='display:none' value="+Global.finalTime+" name='score'>")
          $( "#formz" ).append("<input type='submit' style='position: absolute; left: -9999px'>")
          $( "#inputz" ).attr("name","username")

        })
      })
  }, 500)
}


