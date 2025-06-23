async function fetchForecast() {
  const url = `https://api.openweathermap.org/data/2.5/weather?`;
  const res = await fetch(url);
  const data = await res.json();
  try {
    const temp = data.main.temp; //fetching temperature
    temp.innerHTML = temp;
  } catch (err) {
    console.log(err.message);
  }
}

const cityH5 = document.querySelector("#city");
const tempSpan = document.querySelector("#temp-val");
const maxTempSpan = document.querySelector("#max-temp-val");
const minTempSpan = document.querySelector("#min-temp-val");
const flSpan = document.querySelector("#fl-val");
