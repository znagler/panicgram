// Forces refresh on back button (fixes issue with hitting back button on Safari)
$(window).bind("pageshow", function(event) {
    if (event.originalEvent.persisted) {
        window.location.reload() 
    }
})

$(document).ready(function() {
	$( "a.load-button" ).click(function() {
 		$(".index").empty()
 		$('body').append("<center id='load'><br><br><br><br><br><br><br><br><br><br><br><br><br><br><h1>loading...</h1></center>")
	})
})