console.log("Hello World")

// Listen for form submit.
// Form submit happens on click of submit-btn. 
// Get value of city-type. 
// Asign to var city. 
// If city equals nyc change background to nyc.jpg by adding .nyc to body.
// Else If city equals la change background to la.jpg by adding .la to body.
// else If city equals sf change background to sf.jpg by adding .sf to body.
// else If city equals sydney change background to sydney.jpg by adding .sydney to body. etc.

$( document ).ready(function() {
    console.log("Let's rock.");
  });

$("form").on("submit", function(event){
	event.preventDefault();
	var city = $("#city-type").val();
	if(city == "nyc" || city == "NYC" || city == "New York" || city == "new york"){
		$("body").removeClass().addClass("nyc");
	}
	else if(city == "LA" || city == "la" || city == "Los Angeles" || city == "los angeles"){
		$("body").removeClass().addClass("la");
	}
	else if(city == "Austin" || city == "austin"){
		$("body").removeClass().addClass("austin");
	}
	else if(city == "SF" || city == "sf" || city == "san fran" || city == "san francisco" || city == "San Francisco"){
		$("body").removeClass().addClass("sf");
	}
	else if(city == "Sydney" || city == "sydney"){
		$("body").removeClass().addClass("sydney");
	}
})
