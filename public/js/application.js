

$(document).ready(function() {
console.log("in appp")
initialSetup()
setKeyEvents()

  $( "#formz" ).submit(function( event ) {
  event.preventDefault()
  playOn()
  regenerateSmallString()

  if (checkForWin()){
    winGame()

  }

  })
});


function winGame(){
    $( "#formz" ).off()
    $( "#formz" ).submit(function( event ) {
      event.preventDefault()
    });    
  setTimeout(function(){
    $.when($(".wordstring").fadeOut("slow")).done(function() {
        $( "#inputz" ).off()
        $(".wordstring").hide()
        $(".wordstring").text("WIN")
        $(".wordstring").fadeIn( 2000, function() {
          $("#inputz").attr("placeholder", "Enter username")
          $("#inputz").css("color", "red")
          })
      })
  }, 500)
}


