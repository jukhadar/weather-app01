// var inputCity = document.getElementById("city");

// inputCity.addEventListener("input",function(){
// 	var inputCityValue = '';
// 	inputCityValue = inputCity.value;
// 	console.log(inputCityValue);
// 	//var location = inputCityValue;
// 	// console.log(location);
// 	loadWeather("'"+inputCityValue+"'","");
// });


$('#api_form').on('submit', function(event) {

  $('.temperature').removeClass('animated shake');	

	event.preventDefault();
	var city = $('#city').val();
	loadWeather(city, '');

  
});

// if("geolocation" in navigator) {
// 	navigator.geolocation.getCurrentPosition(function(position){
// 		loadWeather(position.coords.latitude + ',' + position.coords.longitude);
// 	});
// } else {
// 	loadWeather("Phoenix, AZ","");
// }

// $(document).ready(function(){
// 	setInterval(getWeather, 10000);

// });

function loadWeather(location, woeid){

	$.simpleWeather({
		location:  location,   //location
		woeid: woeid,
		unit: 'f',
		success: function(weather) {
			city = weather.city;
			temp = weather.temp + '&deg';
			wcode = '<img class="weathericon " align="middle" src="images/weathericons/' + weather.code
			+ '.svg">';
			wind = '<p>' + weather.wind.spead + '</p><p>' + weather.units.speed + '</p>';
			humidity = weather.humidity + ' %';

			$(".location").text(city);
			$(".temperature").html(temp);
			$(".climate_bg").html(wcode);
			$(".windspeed").html(humidity);

  			$('.temperature').addClass('animated shake');
		},

		error: function (error) {
			$(".error").html('<p>'+ error +'</p>');
		}


	});
}

console.log(city);
