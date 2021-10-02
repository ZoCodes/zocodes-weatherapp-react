import React from "react";

import "./Forecast.css";

export default function Forecast() {
  return (
    <div className="forecast">
      <p className="forecast">Forecast for this week</p>

      <hr />
      <div className="weather-forecast" id="weather-forecast">
        <div className="row">
          <div className="col">
            <img src="media/01d.png" width="60" className="image-fluid" />
            <br />
            <span className="forecast-day">Thursday</span> <br />
            <span className="forecast-temperature">17°C</span>
          </div>

          <div className="col">
            <img src="media/10d.png" width="60" className="image-fluid" />
            <br />
            Friday <br />
            <span className="forecast-temperature">9°C</span>
          </div>

          <div className="col">
            <img src="media/04d.png" width="60" className="image-fluid" />
            <br />
            Saturday <br />
            <span className="forecast-temperature">17°C</span>
          </div>

          <div className="col">
            <img src="media/01d.png" width="60" className="image-fluid" />
            <br />
            Sunday <br />
            <span className="forecast-temperature">21°C</span>
          </div>

          <div className="col">
            <img src="media/01d.png" width="60" className="image-fluid" />
            <br />
            Monday <br />
            <span className="forecast-temperature">22°C</span>
          </div>
        </div>
      </div>
    </div>
  );
}
