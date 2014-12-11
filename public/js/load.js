// if (window.location.hostname != "localhost") window.location = "http://www.panicgr.am"


// Forces refresh on back button (fixes issue with hitting back button on Safari)
$(window).bind("pageshow", function(event) {
    if (event.originalEvent.persisted) {
        window.location.reload() 
    }
})

$(document).ready(function() {
	makeUserNamesTwitterLinks()

	$( "a.load-button" ).click(function() {
 		$(".index").empty()
 		$('body').append("<center id='load'><br><br><br><br><br><br><br><br><br><br><br><br><br><br><h1>loading...</h1></center>")
	})
})

function makeUserNamesTwitterLinks(){
	$( ".user-name" ).get().forEach(function(div){
		if (div.innerHTML[0] === "@"){
			twitter = 'http://twitter.com/' + (div.innerHTML.substring(1))
			div.innerHTML="<a href="+twitter+">"+div.innerHTML+"</a>"
		}
	})
}