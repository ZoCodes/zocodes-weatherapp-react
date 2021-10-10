import React from "react";
import axios from "axios";

import "./Form.css";

export default function Form() {
  function handleResponse(response) {
    console.log(response.data);
  }

  const apiKey = "e744bfafcb3c1411c3f393198d753e28";
  let city = "London";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleResponse);

  return (
    <div className="form">
      <form id="city-form" className="mt-2 mb-4">
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Enter a City"
              id="enter-city-input"
              className="city-input form-control"
            />
          </div>

          <div className="col-3">
            <input
              type="submit"
              value="Search"
              className="search-button btn btn-primary"
              id="search-button"
            />
          </div>
        </div>
      </form>
    </div>
  );
}
