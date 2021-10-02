import React from "react";
import "./MainWeather.css";

export default function WeatherDescription() {
  return (
    <div className="main-weather">
      <ul>
        <div className="row no-gutters">
          <div className="col-7">
            <li className="main-weather-description" id="weather-description">
              rain rain go away
            </li>
            <li className="humidity-stat">
              Humidity: <span id="humidity"></span>%
            </li>
            <li className="wind-stat">
              Wind: <span id="wind"></span> km/h
            </li>
          </div>

          <div className="col-md">
            <li className="main-temperature">
              <span id="temperature">15</span>{" "}
              <a href="#" id="celsius-link" className="units active">
                °C
              </a>
              <span className="unit-break"> | </span>{" "}
              <a href="#" id="fahrenheit-link" className="units">
                °F
              </a>{" "}
            </li>
            <li>
              <img
                src="./media/09d.png"
                className="main-weather-img image-fluid"
                id="main-icon"
                alt="weather image"
              />
            </li>
          </div>

          <div className="col"></div>
        </div>
      </ul>
    </div>
  );
}
