$(document).ready(function() {
$.get( "/dictionary5.txt", function( txt ) {
    // Get an array of all the words
    var dict = {};
    var words = txt.split( "\n" );

    // And add them as properties to the dictionary lookup
    // This will allow for fast lookups later
    for ( var i = 0; i < words.length; i++ ) {
        dict[words[i]] = true;
    }
    // for ( var i = 0; i < words.length; i++ ) {
    //     console.log(dict[words[i]]);
    // }
    var test = "APPLE";

    console.log(words[345]);
    console.log(words);
    console.log(dict);
    // console.log(words.indexOf('ABACI'))
    // console.log(dict[words[10]]);
    console.log(typeof words[10]);
    console.log(dict[test]);
    debugger;

    // The game would start after the dictionary was loaded
    // startGame();
  });

  //  $("#formz").submit(function() {
  // $('#wordstring').animate({marginLeft:'0px'}, 100);
  // console.log(words[54]);
  // });

  // This is called after the document has loaded in its entirety
  // This guarantees that any elements we bind to will exist on the page
  // when we try to bind to them

  // See: http://docs.jquery.com/Tutorials:Introducing_$(document).ready()
});
