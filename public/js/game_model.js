  function analyze(valid,entry) {
    console.log(entry)
    if (valid ){
       $('#statusz').text("Real word")
    }

      if (valid && entry==="APPLE"){
        shift(2)
      } else if (valid && entry==="HELLO"){
        shift(3)
      }
        else if (valid && entry==="MONEY"){
          shift(3)
      }
      $('#statusz').text("Fake word")
    }

    function shift(integer){
      switch (integer){
      case 2:
        $('#first_2').css('background-color','blue')
        $("#first_2").fadeOut(function() {
        eat_letters(integer)});
        break;
        case 3:
        $('#first_2,#third').css('background-color','red')
        $("#first_2,#third").fadeOut(function() {
        eat_letters(integer)});
        break
        case 5:
        $('#first_2,#third').css('background-color','blue')
        break;
      }


    }


  function eat_letters(integer){
    prev = $("span").text()
    switch (integer){
      case 2:
    $("span").text("")
    $("#first_2").html("&nbsp;&nbsp;")
    $("#first_2").removeAttr('style')
    $("#third").text(prev.charAt(2))
    $("#last_2").text(prev.substring(3,5))
    //hidestring -----------------
    hidestring=$("#hidestring").text()
    two_extra = hidestring.substring(5,7)
    $("#hidestring").text(hidestring.substring(2))
    //-----------------------------
    $("#extras").text(two_extra)
    $(".wordstring").animate(
      {'marginLeft':"170px"},"slow",null,function() {
        reset()})
    break
      case 3:
      $("#first_2").html("&nbsp;&nbsp;")
      $("#third").html("&nbsp;")
      $("#first_2,#third").removeAttr('style')
      // $("#last_2").text(prev.substring(2,4))


      console.log(3)
      break
      case 5:
      console.log(5)
      break
    }

  }


  function reset(){
    hidestring=$("#hidestring").text()
    $('.wordstring').removeAttr('style')
    $("#first_2").text(hidestring.substring(0,2))
    $("#third").text(hidestring.charAt(2))
    $("#last_2").text(hidestring.substring(3,5))
    $("#extras").text("")
};

