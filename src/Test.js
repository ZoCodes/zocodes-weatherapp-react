import React from "react";
import axios from "axios";

export default function Test() {
  let city = "London";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=e744bfafcb3c1411c3f393198d753e28&units=metric`;

  function showTemperature(response) {
    alert(`The weather in ${city} is ${Math.round(response.data.main.temp)}°C`);
  }

  axios.get(apiUrl).then(showTemperature);
  return "ZoCodes got React to work";
}
