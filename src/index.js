function refreshWeather(response) {
  let temperatureElement = document.querySelector("#temperature");
  let temperature = response.data.temperature.current;
  let cityElement = document.querySelector("#city");
  let descriptionElement = document.querySelector("#description");
  let humidityElement = document.querySelector("#humidity");
  let windSpeedElement = document.querySelector("#wind-speed");
  let timeElement = document.querySelector("#time");
  let date = new Date(response.data.time * 1000);
  let iconElement = document.querySelector("#icon");

  cityElement.innerHTML = response.data.city;
  timeElement.innerHTML = formatDate(date);
  descriptionElement.innerHTML = response.data.condition.description;
  humidityElement.innerHTML = `${response.data.temperature.humidity}%`;
  windSpeedElement.innerHTML = `${response.data.wind.speed}km/h`;
  temperatureElement.innerHTML = Math.round(temperature);
  iconElement.innerHTML = `<img src="${response.data.condition.icon_url}" class="weather-app-icon" />`;

getForecast(response.data.city);
}

function formatDate(date)  {
  let minutes = date.getMinutes();
  let hours = date.getHours();
  let days =[
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];

  let day = days[date.getDay()];

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  if (hours < 10) {
    hours = `0${hours}`;
  }

  return `${days} ${hours}:${minutes}`;
}

function displayTemperature(response) {
  let temperatureElement = document.querySelector("#weather-app-temperature");
  let temperature = Math.round(response.data.temperature.current);
  let cityElement = document.querySelector("#weather-app--city");
  cityElement.innerHTML = response.data.city;
  temperatureElement.innerHTML = temperature;
}

function search(event) {
  event.preventDefault();
  let searchInputElement = document.querySelector("#search-input");
  let city = searchInputElement.value;


    function handleSearchSubmit(event) {
      event.preventDefault();
      let searchInput = document.querySelector("#search-form-input");
      let cityElement = document.querySelector("city");
      cityElement.innerHTML = searchInput.value;
      searchCity(searchInput.value);
    }
  }
  let apiKey = "e095dc345c934o5ae8fb54ctcbb40bf0";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
axios.get(apiUrl).then(displayTemperature);


displayForecast(response)  
let forecastHtml = "";

function getForecast(city);
function displayForecast(response);  

      
function formatDay (timestamp)    {
let date  = new date(timestamp * 1000);
let days = ["Sun", "Mon"," Tue", "Wed", "Thu", "Fri", "Sat"]

return days(date.getDay());
}


let forecastHTML = "";

  response.data.daily.forEach(function (day,  index) {
      if (index <  5); {
        forecastHTML =
          forecastHTML + 
          `
          days.forEach(function (day) {
    <div class="weather-forecast-day">
        <div class="weather-forecast-date">${formatDay(day.time)}</div>
        
        <img src="${day.condition.icon_url}" class="weather-forecast-icon" />
            <div class="weather-forecast-temperatures">
                <div class="weather-forecast-temperature">
                     <strong> ${Math.round(day.temperature.maximum)}º</strong>
                </div>
                <div class="weather-forecast-temeprature">{Math.round(
                  day.temperature.minimum
            )}°</div>
        </div>
     </div>
    `;  
   }
  });
  let forecastElement = document.querySelector("#forecast"); 
  forecastElement.innerHTML = forecastHTML;
    

function searchCity(city) {
  let apiKey = "e095dc345c934o5ae8fb54ctcbb40bf0";
  let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apiKey}&units=metric`;
  axios.get(apiUrl).then(refreshWeather);
}

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", search);

let currentDateELement = document.querySelector("#weather-app-date");
let currentDate = new Date();

currentDateELement.innerHTML = formatDate(currentDate);

let searchFormElement = document.querySelector("#search-form");
earchFormElement.addEventListener("submit", handleSearchSubmit);


function getForecast(city)   {
  apiKey = "e095dc345c934o5ae8fb54ctcbb40bf0";
  apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
  axios(apiUrl).then(displayForecast);
    }
  