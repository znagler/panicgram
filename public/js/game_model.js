  function analyze(valid,entry) {
    // console.log(entry)
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
        console.log("tesdtst")
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
    switch (integer){
      case 2:
      console.log("2...")
    $("span").text("")
    /// Add spaces
    $("#first_2").html("&nbsp;&nbsp;")
    $("#first_2").removeAttr('style')
    $("#third").text(prev.charAt(2))
    $("#last_2").text(prev.substring(3,5))
    //hidestring -----------------
    hidestring=$("#hidestring").text()
    two_extra = hidestring.substring(5,7)
    $("#hidestring").text(hidestring.substring(2))
    console.log("hidestring:")
    console.log("2 eat letters")
    console.log(hidestring)
    //-----------------------------
    $("#extras").text(two_extra)
    $(".wordstring").animate(
      {'marginLeft':"180px"},"slow",null,function() {
        reset()})
    break
      case 3:
      $("#first_2").html("&nbsp;&nbsp;")
      $("#third").html("&nbsp;")
      $("#first_2,#third").removeAttr('style')
      $("#last_2").text(prev.substring(3,5))
      //hidestring -----------------
      hidestring=$("#hidestring").text()
      three_extra = hidestring.substring(5,8)
      $("#hidestring").text(hidestring.substring(3))
      console.log("hidestring:")
      console.log(hidestring)
      //-----------------------------
      $("#extras").text(three_extra)
      $(".wordstring").animate(
      {'marginLeft':"90px"},"slow",null,function() {
        reset()})
      break
      case 5:
      $("#first_2").html("&nbsp;&nbsp;")
      $("#third").html("&nbsp;")
      $("#last_2").html("&nbsp;&nbsp;")
      $("#first_2,#third,#last_2").removeAttr('style')
      //hidestring -----------------
      hidestring=$("#hidestring").text()
      five_extra = hidestring.substring(5,10)
      $("#hidestring").text(hidestring.substring(5))
      console.log("hidestring:")
      console.log(hidestring)
      //-----------------------------
      $("#extras").text(five_extra)
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
    $("#first_2").text(hidestring.substring(0,2))
    $("#third").text(hidestring.charAt(2))
    $("#last_2").text(hidestring.substring(3,5))
    $("#extras").text("")

};

