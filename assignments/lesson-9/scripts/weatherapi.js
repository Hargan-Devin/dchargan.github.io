var weatherRequest = new XMLHttpRequest();
var apiURL =
        'http://samples.openweathermap.org/data/2.5/forecast?id=4156210&appid=5cd1df0f20e7b178b00435263d755f1f';
weatherRequest.open("GET",apiURL,true);
weatherRequest.responseType = 'json';
weatherRequest.send();
weatherRequest.onload = function() {
    var weatherData = JSON.parse(weatherRequest.responseText);
    console.log(weatherData);
}

