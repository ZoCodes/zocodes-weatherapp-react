import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";

import Form from "./Form";
import CurrentLocation from "./CurrentLocation";
import MainWeather from "./MainWeather";
import Forecast from "./Forecast";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="weather-app-wrapper">
          <div className="card border-info border-3">
            <div className="card-body">
              <Form />
              <CurrentLocation />
              <MainWeather />
              <Forecast />
            </div>
          </div>
        </div>
      </div>

      <p className="build-info">
        This weather app was created by{" "}
        <a
          href="https://www.linkedin.com/in/zoeelizabethblogg/"
          target="_blank"
          rel="noreferrer"
        >
          Zoe Blogg{" "}
        </a>
        and is open-sourced on{" "}
        <a href="https://github.com/ZoCodes/weatherapp">GitHub</a>
      </p>
    </div>
  );
}
