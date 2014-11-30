$(document).ready(function() {
$.get( "/dictionary5.txt", function( txt ) {
    var dict = {}
    var words = txt.split( "\n" )
    for ( var i = 0; i < words.length; i++ ) {
        dict[words[i].trim()] = true
    }
    localStorage.setItem('dict', JSON.stringify(dict))
  })
})

