

$(document).ready(function() {

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
  setTimeout(function(){

    $.when($(".wordstring").fadeOut("slow")).done(function() {
        $( "#inputz" ).off()
        // $("#hidestring").text("WIN!!")

        $(".wordstring").hide()
        $(".wordstring").text("WIN!!")

        $(".wordstring").fadeIn( 2000, function() {
          $("#inputz").attr("placeholder", "Enter username")
          $("#inputz").css("color", "red")

          });
      });

  }, 500);
}


