async function fetchForecast() {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=b01c274927b7aea00a57575726d26af12`;
  const res = await fetch(url);
  const data = await res.json();
  try {
    const temp = data.main.temp; //fetching temperature
    tempSpan.innerHTML = temp;
    const feels_like_temp = data.main.feels_like;
    flSpan.innerHTML = feels_like_temp;
    const max_temp = data.main.temp_max;
    maxTempSpan.innerHTML = max_temp;
    const min_temp = data.main.temp_min;
    minTempSpan.innerHTML = min_temp;
    const humidity = data.main.humidity;
    humiditySpan.innerHTML = humidity;
    const wind_speed = data.wind.speed;
    windSpeedSpan.innerHTML = wind_speed;

    const cityName = data.name;
    cityH5.innerHTML = cityName;

    const desc = data.weather[0].main;
    descSpan.innerHTML = desc;

    const detaileddesc = data.weather[0].description;
    detailedDescSpan.innerHTML = detaileddesc;
    // result.classList.remove("d-none");
  } catch (err) {
    console.log(err);
    window.location.href = "./failed.html";
  }
}

const cityInp = document.getElementById("city-search");
const result = document.querySelector("#weather-display");
let cityVal = undefined;
const btn = document.querySelector("#check-weather");
btn.addEventListener("click", (e) => {
  e.preventDefault();
  cityVal = cityInp.value;
  console.log(cityVal);
  result.classList.remove("d-none");
  fetchForecast();
});

const cityH5 = document.querySelector("#city");
const tempSpan = document.querySelector("#temp-val");
const maxTempSpan = document.querySelector("#max-temp-val");
const minTempSpan = document.querySelector("#min-temp-val");
const flSpan = document.getElementById("fl-val");
const descSpan = document.querySelector("#desc-val");
const detailedDescSpan = document.querySelector("#detailed-desc-val");
const humiditySpan = document.querySelector("#humidity-val");
const windSpeedSpan = document.querySelector("#wind-speed-val");
