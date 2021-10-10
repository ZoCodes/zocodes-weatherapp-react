import React, { useState } from "react";
import axios from "axios";

import "./Form.css";

export default function Form() {
  function handleSubmit() {}
  return (
    <div className="form">
      <form id="city-form" className="mt-2 mb-4" onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Enter a City"
              id="enter-city-input"
              className="city-input form-control"
              onChange={updateCity}
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
