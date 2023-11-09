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
function storeCityName() {
  var userCity = document.getElementById('citySearch');
  var cityName = userCity.value;
  console.log(cityName);
  







var apiKey = '96dbd54db42d773df996682fad6695a5';
var city = 'London';
var apiURL = 'https://api.openweathermap.org/data/2.5/forecast?q='+cityName+'&appid='+apiKey;
//User input of city name


fetch(apiURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
    // document.getElementsByTagName('h2').textContent = data.city.name;
    document.getElementById('city').textContent = data.city.name;
    
    

    //Temperature
    var kelvin = data.list[0].main.temp;
    var temp = kelvin - 273.15
    document.getElementById('temperature').textContent = temp.toFixed(1);

    //Description of Weather conditions
    document.getElementById('description').textContent = data.list[0].weather[0].description;

    
    //Formatted Date
    unixValue = data.list[0].dt_txt;
    formattedDate = dayjs(unixValue);
    document.getElementById('dateToday').textContent = formattedDate;

    //weather icon
    var iconLogo = data.list[0].weather[0].icon
    document.getElementById('icon').src = 'https://openweathermap.org/img/wn/'+iconLogo+'@2x.png'
      
    
    
  });


};
fetch(apiURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
    
    var sectionElement = document.createElementbyId('future');

    
    


  //For Loop
  for (var i = 1; i < 6; i++)
  var newDiv = document.createElement('div');
  newDiv.classList.add('dynamic-div');

  var kelvin2 = data.list[i].main.temp;
  var temp2 = kelvin2 - 273.15;

  description2 = data.list[i].weather[0].description;

  unixValue2 = data.list[i].dt_txt;
  formattedDate2 = dayjs(unixValue2);
  
  
  newDiv.innerHTML = `
  <p> Date: ${formattedDate2}°C</p>
  <p> Description: ${description2}</p>
  <p> Temperature: ${temp2}°C</p>
  `;

    sectionElement.appenChild(newDiv);
  
})