  $(document).ready(function() {

    function analyze(entry) {
      if (entry === true){
        console.log("fadez")
        $('#first_2').css('background-color','blue')
        $("#first_2").fadeOut(function() {
        eat_letters()
});
        // $(".wordstring").prepend("__")
        // document.getElementById( '#first_2 ).style.display = 'inline';
        // setTimeout(function(){$("#first_2").prepend("__")}, 1000);
        // setTimeout(function(){eat_letters()}, 1000);

        //
        // $('span').text("")



      } else {
      $('#statusz').text("Fake word")
      }
    }


  function eat_letters(){
    prev = $("span").text()
    $("span").text("")

    $("#first_2").text("__")
    $("#first_2").removeAttr('style')
    // $("#first_2").show()
    $("#third").text(prev.charAt(2))
    $("#last_2").text(prev.substring(3,5))


    // string = $(".wordstring").text()
    // console.log(string)
    // $(".wordstring").text("       "+string.substring(7))
    // string = $("#hidestring").text()
    // $("#hidestring").text(string.substring(2))
    // // $(".wordstring").css('marginLeft','50px');





    // $(".wordstring").animate(
    //   {'marginLeft':"50px"},"slow");
    // $(".wordstring").append("       "+string.substring(5,8))


  }






  $( "#formz" ).submit(function( event ) {
    event.preventDefault()
    console.log("wtf")
    console.log("word submitted...")
  var entry = $('#inputz').val().toUpperCase();
  console.log(entry)
  var store_dict = localStorage.getItem('dict');
  console.log("storage test 2...");
  var dict = JSON.parse(store_dict);
  analyze(dict[entry]);
  $("#inputz").val("")


  })


});




