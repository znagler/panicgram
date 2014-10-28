function setKeyEvents(){


$( "#inputz" ).keypress(function() {

    if ( (event.which == 74 || event.which == 106) && $( "#inputz" ).val().length == 0) {
     $( "#inputz" ).css("color","red")
  }
});


  $( "#inputz" ).keyup(function() {
    if ($( "#inputz" ).val().length >= 5){
      $( "#inputz" ).css("color","#34007F")
    }
    if ($( "#inputz" ).val().length <5 && $( "#inputz" ).val().toUpperCase()!="J"){
      $( "#inputz" ).css("color","gray")
    }


  });

}
