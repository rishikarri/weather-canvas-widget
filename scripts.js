$(document).ready(function(){
	var weatherURL = "http://api.openweathermap.org/data/2.5/weather?zip=30324,us&appid=" + apiKey;

	console.log(weatherURL);

	$.getJSON(weatherURL, function(weatherData){
		console.log(weatherData);
	})
})