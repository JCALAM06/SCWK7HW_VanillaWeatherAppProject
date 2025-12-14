function displayTemperature(response) {
  let temperatureElement = document.querySelector("#currentDay_temperature");
  let temperature = Math.round(response.data.temperature.current);
  let cityElement = document.querySelector("#current_city");
  cityElement.innerHTML = response.data.city;
  temperatureElement.innerHTML = temperature;
}

function search(event) {
  let searchInputElement = document.querySelector("#search_input");
  let city = searchInputElement.ariaValueMax;

  let apiKey = "b2a5adcct04b33178913oc335f405433";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;

  axios.get(apiUrl).then(displayTemperature);
}

function formatDate(date) {
  let minutes = date.getMinutes();
  let hours = date.getHours();
  let day = date.getDay();

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  if (hours < 10) {
    hours = `0${hours}`;
  }

  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let formattedDay = days[day];
  return `${formattedDay} ${hours}:${minutes}`;
}

let searchForm = document.querySelector("#search_form");
searchForm.addEventListener("submit", search);

let currentDateElement = document.querySelector("#current_date");
let currentDate = new Date();

currentDateElement.innerHTML = formatDate(currentDate);
