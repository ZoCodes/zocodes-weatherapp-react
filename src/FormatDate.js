import React from "react";

export default function FormatDate(props) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let day = days[props.data.getDay()];
  let month = months[props.data.getMonth()];
  let hours = props.data.getHours();
  let years = props.data.getFullYear();
  if (hours < 10) {
    hours = `0${hours}`;
  }

  let minutes = props.data.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  return (
    <div>
      <h2>
        {day}, {month} {years}| {hours}:{minutes}
      </h2>
      ;
    </div>
  );
}
