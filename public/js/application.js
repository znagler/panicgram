function playOn(){
  // logic = new Logic
  var entry = $('#inputz').val().toUpperCase();
  var store_dict = localStorage.getItem('dict');
  var dict = JSON.parse(store_dict);
  $("#inputz").val("")
  var jumps = parseInt($("#jumps").text())
  if (entry === "J"  && jumps>0){
    Animate.shift(1)
    jumps--
    $("#jumps").text(jumps)
    return
  }
  if (dict[entry]){
    $('#statusz').text("Real word")
    var nextFive = $('#hidestring').text().substring(0,5).toUpperCase()
    currentLogic = new logic(entry,nextFive)
    // var shift_length = Logic.analyze(entry,next_five)
    Animate.shift(currentLogic.shiftLength())
    jumps += currentLogic.addedJumps()
    $("#jumps").text(jumps)

  }

  else{
      $('#statusz').text("Fake word")
    }
}

function generateString(stringLength){
  str = ""
  letterOne = "bbccddddffggghhjkllllmmnnnnnnpprrrrrrssssttttttvwy".split("")
  letterTwo = "bbccddddffggghhllllmmnnnnnnpprrrrrrsssstttttt".split("")
  letterThree = "aaaaaaaaaeeeeeeeeeeeeiiiiiiiiioooooooouuuu".split("")
  while (true){
    str += letterOne[Math.floor(Math.random()*letterOne.length)]
    if (str.length==stringLength) return str
    str += letterTwo[Math.floor(Math.random()*letterTwo.length)]
    if (str.length==stringLength) return str
    str += letterThree[Math.floor(Math.random()*letterThree.length)]
    if (str.length==stringLength) return str
  }
}

function initialSetup(){
  var playString = generateString(15)
  $("#hidestring").text(playString)
  $("#playstring").text(playString)
  Animate.reset()
}

function regenerateSmallString(){
  if ($("#hidestring").text().length < 10){
  newString = generateString(15)
  $("#hidestring").append(newString)
  }
}



$(document).ready(function() {

  initialSetup()
  $( "#formz" ).submit(function( event ) {
  event.preventDefault()

  playOn()
  regenerateSmallString()

  // console.log($("#hidestring").text().length)
  })
});




