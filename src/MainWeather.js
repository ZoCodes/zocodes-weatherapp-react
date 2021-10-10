import React, { useState } from "react";
import axios from "axios";
import "./MainWeather.css";

export default function WeatherDescription() {
  let [populated, setPopulated] = useState(false);
  let [mainWeatherData, setMainWeatherData] = useState({});

  function handleAxiosResponse(response) {
    setMainWeatherData({
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
    });
    setPopulated(true);
  }

  if (populated) {
    return (
      <div className="main-weather">
        <ul>
          <div className="row no-gutters">
            <div className="col-7">
              <li
                className="main-weather-description text-capitalize"
                id="weather-description"
              >
                {mainWeatherData.description}
              </li>
              <li className="humidity-stat">
                Humidity: <span id="humidity">{mainWeatherData.humidity}</span>%
              </li>
              <li className="wind-stat">
                Wind: <span id="wind">{mainWeatherData.wind}</span> km/h
              </li>
            </div>

            <div className="col-md">
              <li className="main-temperature">
                <span id="temperature">
                  {Math.round(mainWeatherData.temperature)}
                </span>
                {/*eslint-disable-next-line*/}
                <a href="#" id="celsius-link" className="units active">
                  °C
                </a>
                <span className="unit-break"> | </span>
                {/*eslint-disable-next-line*/}
                <a href="#" id="fahrenheit-link" className="units">
                  °F
                </a>{" "}
              </li>
              <li>
                <img
                  src="./media/09d.png"
                  className="main-weather-img image-fluid"
                  id="main-icon"
                  alt="weather"
                />
              </li>
            </div>

            <div className="col"></div>
          </div>
        </ul>
      </div>
    );
  } else {
    let city = "leeds";
    let apiKey = "e744bfafcb3c1411c3f393198d753e28";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleAxiosResponse);

    return "Loading Weather App...";
  }
}
