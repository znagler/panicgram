function checkForWin(){
  var score = parseInt($("#score").data("s"))
  if (score >= 2) {
    return true
  } else {
    return false
  }
}

function winGame(){

  Global.gameOverAnimationStarted = true

  var endTime = new Date()
  Global.rawTime = Math.round((endTime - Global.startTime)*(1/100))
  var finalTime = Global.rawTime/10

  $.ajax({
    url: '/hs_check',
    type: 'GET',
    data: {time: Global.rawTime,goal:Global.goal}
  })
  .done(function(response) {
    if (response === "true") Global.highScore = true
  })

  $('#statusz').text("time: "+finalTime+" seconds")
  $( "#inputz" ).off()
  $( "#inputz" ).prop( "disabled", true )


  setTimeout(function(){
    $.when($(".wordstring").fadeOut("slow")).done(function() {
      $(".wordstring").hide()
      $(".wordstring").css("color","#620037")
      $(".wordstring").html("goal<i class='fa fa-flag-checkered'></i>")
      $(".wordstring").fadeIn( 2000, function() {
        runTwitterScript(Global.rawTime/10)
        Global.gameOverAnimationComplete = true




        $( "#inputz" ).prop( "disabled", false )
        $( "#inputz" ).focus()
        $( "#inputz" ).css("text-transform","none")

        stylePlaceholderDependingOnHighScore(Global.highScore)
        prepareFormForPost()

        // Prevent double form submission
        $( "#formz" ).submit(function( event ) {$('#temp-submit').remove()})
        })
    })
  }, 500)
}

function runTwitterScript(time){
  var winMessage = "I%20just%20beat%20http://www.panicgr.am%20in%20"+time+"%20seconds.%20I%20am%20a%20golden%20God!"
  $('#jump-container').html("<a href='https://twitter.com/intent/tweet?button_hashtag=panicgram&text="+winMessage+"'' class='twitter-hashtag-button' data-size='large' data-related='panicgram'></a>")
  $('#score-container').remove()

  !function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+'://platform.twitter.com/widgets.js';fjs.parentNode.insertBefore(js,fjs);}}(document, 'script', 'twitter-wjs');
}

function stylePlaceholderDependingOnHighScore(highscore){
  if (highscore){
    $("#inputz").prop("placeholder", "HIGH SCORE! enter name")
    $("#inputz").css("color", "#9B6785")
    return
  } else {
    $("#inputz").prop("placeholder","enter name")
    $("#inputz").css("color", "black")
    return
  }
}

function prepareFormForPost(){
  $( "#formz" ).prop("action","/score")
  $( "#formz" ).prop("method","post")
  $( "#formz" ).append("<input style='display:none' value="+Global.rawTime+" name='score'>")
  $( "#formz" ).append("<input style='display:none' value="+Global.goal+" name='goal'>")
  $( "#formz" ).append("<input id='temp-submit' type='submit' style='position: absolute; left: -99px'>")
  $( "#inputz" ).prop("name","username")
}