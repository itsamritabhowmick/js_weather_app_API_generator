# 🌤️ Weather App - OpenWeatherMap API

This is a simple **Weather App** that allows users to search for a city and view the current weather conditions using the **OpenWeatherMap API**. It displays useful data like temperature, humidity, wind speed, and more in a clean Bootstrap-based interface.

## 🚀 Features

- Search weather by **city name**
- Displays:
  - Current temperature
  - Max/Min temperature
  - Feels like temperature
  - Humidity
  - Wind speed
  - Weather description
- Shows error page for invalid city input
- Responsive UI using **Bootstrap**

## 🛠️ Tech Stack

- **HTML5**
- **CSS3**
- **Bootstrap 5.3**
- **JavaScript (ES6+)**
- **OpenWeatherMap API**

## 🧪 How to Use Locally

1. Clone the repository:

```bash
git clone https://github.com/your-username/weather-app.git
cd weather-app

Open index.html in any browser.

Enter a city name and click Search
```

2. API Key Setup
This app uses the OpenWeatherMap API. The API key is already embedded in the index.js file:
```
const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=b01c274927b7aea00a57575726d26af1`;
```

🙋‍♀️ Author
Amrita Bhowmick

GitHub: @itsamritabhowmick

