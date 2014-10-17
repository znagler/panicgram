$(document).ready(function() {
$.get( "/dictionary5.txt", function( txt ) {
  console.log("loading words...")

///example 1/

    localStorage.setItem('I <3',"local storage");


//example 2//

    // var dict = {};
    // var words = txt.split( "\n" );

    // for ( var i = 0; i < words.length; i++ ) {
    //     dict[words[i].trim()] = true;
    //     // localStorage.setItem(words[i].trim(),true);
    // }
    // localStorage.setItem('dict', JSON.stringify(dict));
    // console.log("words loaded")
  });



});

