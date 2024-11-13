import React, { useState } from "react";
import "../App.css";

function Weather(props) {
  const [temperature, setTemperature] = useState(props.temperature);

  function showFahrenheit(event) {
    event.preventDefault();
    setTemperature(Math.round(props.temperature * 9) / 5 + 32);
  }
  function showCelsius(event) {
    event.preventDefault();
    setTemperature(props.temperature);
  }

  return (
    <div>
      <p>
        Počasí v {props.city} je {temperature}{" "}
        <a href="/" onClick={showCelsius}>
          °C
        </a>{" "}
        |
        <a href="/" onClick={showFahrenheit}>
          {" "}
          °F
        </a>
        .
      </p>
    </div>
  );
}

export default Weather;
