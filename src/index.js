function displayWeather(response) {
  // city element
  document.querySelector("#current_city").innerHTML = response.data.city;
  // temperature element
  document.querySelector("#current_temperature").innerHTML = Math.round(
    response.data.temperature.current
  );
  // weather condition
  let condition = response.data.condition.description;
  document.querySelector("#weather_condition").innerHTML =
    capitalizeFirstLetter(condition);

  // humidity
  document.querySelector("#humidity").innerHTML =
    response.data.temperature.humidity;
  // wind speed
  document.querySelector("#wind").innerHTML = response.data.wind.speed;
  // weather condition icon
  document
    .querySelector("#weather_icon")
    .setAttribute("src", response.data.condition.icon_url);

  // date & time element
  document.querySelector("#current_date").innerHTML = formatDate(date);

  let date = new Date(response.data.time * 1000);

  console.log(response.data);
}

function search(event) {
  event.preventDefault();

  let searchInputElement = document.querySelector("#search_input");
  let city = searchInputElement.value;

  let apiKey = "34t14b5f55afff878dodf0ce647bbe96";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;

  axios.get(apiUrl).then(displayWeather);
}

function formatDate(date) {
  let minutes = date.getMinutes();
  let hours = date.getHours();

  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let day = date.getDay();

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  if (hours < 10) {
    hours = `0${hours}`;
  }

  return `${days[day]} ${hours}:${minutes}`;
}

function capitalizeFirstLetter(text) {
  return text.charAt(0).toUpperCase() + text.slice(1);
}

let searchForm = document.querySelector("#search_form");
searchForm.addEventListener("submit", search);

let now = new Date();
document.querySelector("#current_date").innerHTML = formatDate(now);
