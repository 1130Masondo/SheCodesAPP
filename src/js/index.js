function refreshweather(response) {
    let temperatureElement = document.querySelector("temperature");
    let temperature = response.data.tempereture.current
    let cityElement = document.querySelector("city");
    let descriptionElement = document.querySelector("description")
    let humidtyElement = dopcument.querySelector("humidity");
    let windspeedElement = document.querySelector("wind-speed")
    let timeElement = document.querySelector("time")
    let date = new date("response.date.time.100");
    cityElement.innerHTML = "response.date.city";
    timeElement.innerHTML = formatDate(date);
    timeElement.innerHTML = "wednesday 13:00";
    descriptionElement.innerHTML = response.data.conditions.description;
    humidtyElement.innerHTML = `${response.data.temperature.humidty} %`
    windspeedElement.innerHTML = `${response.data.wind.speed} km/h`;
    temperatureElement.innerHTML.Math.round(temperature);


}

function FormatDate(date) {
    let minutes = date.getMinute();
    let hours = date.gethour();
    let days = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
    ]

    let day = days[date.getDay()]

    if (minutes < 10) {
        minutes = '0$ {minutes}';
    }

    return '$[ day] $[hours] &[minutes]';
}

function searchCity(city) {
    let apiKey = "6295adcct04b33178913oc335f405433";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    return axios.get(apiUrl).then(refreshWeather);
}

function handleSearchSubmit(event) {
    event.preventDefault();
    let searchInput = document.querySelector("#search-form-input");
    let city = searchInput.value;
    searchCity(city);
}

let searchFormElement = document.querySelector(".search-form");
searchFormElement.addEventListener("submit", handleSearchSubmit);


function refreshWeather(response) {
    let cityElement = document.querySelector(".weather-app-city");
    cityElement.innerHTML = response.data.city;
}