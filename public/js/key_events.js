function setKeyEvents(){
  $( "#inputz" ).keypress(function() {

    if(event.which === 0 || event.which === 32){
      $("#inputz").val("")
      if (Global.jumps > 0){
        if (!Global.currentlyShifting && !Global.currentlyUsingAllJumps  && !Global.gameOverAnimationStarted){
          jump()
          if (checkForWin()) winGame()
        } 
      } else {
        $('#statusz').text("no jumps")
      } 
    }

    if ( (event.which == 74 || event.which == 106) && $( "#inputz" ).val().length === 0) {
     $( "#inputz" ).css("color","red")
   }
 })

  $( "#inputz" ).keyup(function() {
    if ($("#inputz").val() === " ") $("#inputz").val("")
    if ($( "#inputz" ).val().length >= 5){
      $( "#inputz" ).css("color","#34007F")
    }
    if ($( "#inputz" ).val().length <5 && $( "#inputz" ).val().toUpperCase()!="J"){
      $( "#inputz" ).css("color","gray")
    }
  })
}
