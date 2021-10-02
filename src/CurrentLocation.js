import React from "react";

import "./CurrentLocation.css";

export default function CurrentLocation() {
  return (
    <div className="currentLocation">
      <button className="current-location btn btn-primary" id="current-button">
        Current Location
      </button>
    </div>
  );
}
