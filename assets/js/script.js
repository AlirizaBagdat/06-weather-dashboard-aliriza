//## Acceptance Criteria


// 'GIVEN a weather dashboard with form inputs'

// //Information on City
// 'WHEN I view current weather conditions for that city'
// 'THEN I am presented with the city name, the date, an icon representation of weather conditions, the temperature, the humidity, and the wind speed'

// //Weather Information
// 'WHEN I view future weather conditions for that city'
// 'THEN I am presented with a 5-day forecast that displays the date, an icon representation of weather conditions, the temperature, the wind speed, and the humidity'


// //Local Storage 
// 'WHEN I search for a city'
// 'THEN I am presented with current and future conditions for that city and that city is added to the search history'
// 'WHEN I click on a city in the search history'
// 'THEN I am again presented with current and future conditions for that city'

var apiKey = '96dbd54db42d773df996682fad6695a5';
var city = 'London';
var apiURL = 'https://api.openweathermap.org/data/2.5/forecast?q='+city+'&appid='+apiKey;
fetch(apiURL);