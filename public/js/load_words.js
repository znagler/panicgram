$(document).ready(function() {
$.get( "/dictionary5.txt", function( txt ) {
  console.log("loading words...")
    var dict = {};
    var words = txt.split( "\n" );

    for ( var i = 0; i < words.length; i++ ) {
        dict[words[i].trim()] = true;
        // localStorage.setItem(words[i].trim(),true);
    }
    localStorage.setItem('dict', JSON.stringify(dict));
    console.log("words loaded")
  });



});

