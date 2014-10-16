  function set_hidestring_and_extras(integer){
    hidestring=$("#hidestring").text()
    extras = hidestring.substring(5,5+integer)
    $("#hidestring").text(hidestring.substring(integer))
    $("#extras").text(extras)
  }



  function analyze(valid,entry) {
    if (valid ){
       $('#statusz').text("Real word")
    }
      if (valid && entry==="APPLE"){
        shift(2)
      } else if (valid && entry==="HELLO"){
        shift(3)
      }
        else if (valid && entry==="MONEY"){
          shift(5)
      }
      else {
      $('#statusz').text("Fake word")
      }
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
        $.when( $("#first_2").fadeOut(), $("#third").fadeOut() ).done(function() {
        eat_letters(integer)
        });

        break;
        case 5:
        $('#first_2,#third,#last_2').css('background-color','yellow')
        $.when( $("#first_2").fadeOut(), $("#third").fadeOut(),$("#last_2").fadeOut()).done(function() {
        eat_letters(integer)
        });
        break;
      }
    }

  function eat_letters(integer){
    console.log("eat letters kicked off")
    prev = $("span").text()
    $("#first_2").html("&nbsp;&nbsp;")
    switch (integer){
      case 2:
    $("#first_2").removeAttr('style')
    $("#third").text(prev.charAt(2))
    $("#last_2").text(prev.substring(3,5))
    set_hidestring_and_extras(2)
    $(".wordstring").animate(
      {'marginLeft':"180px"},"slow",null,function() {
        reset()})
    break
      case 3:
        $("#third").html("&nbsp;")
        $("#first_2,#third").removeAttr('style')
        $("#last_2").text(prev.substring(3,5))
        set_hidestring_and_extras(3)
        $(".wordstring").animate(
        {'marginLeft':"90px"},"slow",null,function() {
          reset()})
      break
      case 5:
        $("#third").html("&nbsp;")
        $("#last_2").html("&nbsp;&nbsp;")
        $("#first_2,#third,#last_2").removeAttr('style')
        set_hidestring_and_extras(5)
        $(".wordstring").animate(
        {'marginLeft':"-90px"},"slow",null,function() {
          reset()})
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

