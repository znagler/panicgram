 var Animate = {

  set_hidestring_and_extras: function(integer){
    // hidestring=$("#hidestring").text()
    hidestring=$("#hidestring").data('hs')
    extras = hidestring.substring(5,5+integer)
    // $("#hidestring").text(hidestring.substring(integer))
    $("#hidestring").data('hs',hidestring.substring(integer))
    View.updateHs()
    $("#extras").text(extras)
  },

  shift: function(integer){
      switch (integer){
      case 1:
       $('#first').css('background-color','gray')
        $.when( $("#first").fadeOut(70)).done(function() {
        Animate.eat_letters(integer)
        });
        break;
      case 2:
       $('#first,#second').css('background-color','#79C0EE')
        $.when( $("#first").fadeOut("fast"), $("#second").fadeOut("fast")).done(function() {
        Animate.eat_letters(integer)
        });
        break;
        case 3:
        $('#first,#second,#third').css('background-color','#65FF00')
        $.when( $("#first").fadeOut("fast"), $("#second").fadeOut("fast"),$("#third").fadeOut("fast") ).done(function() {
        Animate.eat_letters(integer)
        });
        break;
        case 5:
        $('#first,#second,#third,#last_2').css('background-color','#FF1A75')
        $.when( $("#first").fadeOut("fast"),$("#second").fadeOut("fast"), $("#third").fadeOut("fast"),$("#last_2").fadeOut("fast")).done(function() {
        Animate.eat_letters(integer)
        });
        break;
      }
    },

  eat_letters: function(integer){
    prev = $("span").text()
    switch (integer){
      case 1:
    $("#first").html("&nbsp;")
    $("#first").removeAttr('style')
    $("#second").text(prev.charAt(1))
    $("#third").text(prev.charAt(2))
    $("#last_2").text(prev.substring(3,5))
    Animate.set_hidestring_and_extras(1)
    $(".wordstring").animate(
      {'marginLeft':"270px"},70,null,function() {
        Animate.reset()})
      break
      case 2:
    $("#first").html("&nbsp;")
    $("#second").html("&nbsp;")
    $("#first,#second").removeAttr('style')
    $("#third").text(prev.charAt(2))
    $("#last_2").text(prev.substring(3,5))
    Animate.set_hidestring_and_extras(2)
    $(".wordstring").animate(
      {'marginLeft':"180px"},"fast",null,function() {
        Animate.reset()})
      break
    case 3:


        $("#first").html("&nbsp;")
        $("#second").html("&nbsp;")
        $("#third").html("&nbsp;")
        $("#first,#second,#third").removeAttr('style')
        $("#last_2").text(prev.substring(3,5))
        Animate.set_hidestring_and_extras(3)
        $(".wordstring").animate(
        {'marginLeft':"90px"},"fast",null,function() {
          Animate.reset()})
      break
    case 5:
        $("#first").html("&nbsp;")
        $("#second").html("&nbsp;")
        $("#third").html("&nbsp;")
        $("#last_2").html("&nbsp;&nbsp;")
        $("#first,#second,#third,#last_2").removeAttr('style')
        Animate.set_hidestring_and_extras(5)
        $(".wordstring").animate(
        {'marginLeft':"-90px"},"fast",null,function() {
          Animate.reset()})
      break
    }

  },

  reset: function(){
    hidestring=$("#hidestring").data('hs')
    $('.wordstring').removeAttr('style')
    $("#first").text(hidestring.charAt(0))
    $("#second").text(hidestring.charAt(1))
    $("#third").text(hidestring.charAt(2))
    $("#last_2").text(hidestring.substring(3,5))
    $("#extras").text("")
    Global.currentlyShifting = false
  },

}
