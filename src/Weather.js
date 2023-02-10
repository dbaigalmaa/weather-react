import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
  let [temp, setTemp] = useState("");
  let [desc, setDesc] = useState("");
  let [humid, setHumid] = useState("");
  let [wind, setWind] = useState("");
  let [icon, setIcon] = useState("");

  function showWeather(response) {
    setTemp(response.data.main.temp);
    setDesc(response.data.weather[0].description);
    setHumid(response.data.main.humidity);
    setWind(response.data.wind.speed);
    setIcon(
      `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
    );
  }

  if (props.city) {
    let apiKey = "7f74d00955f9d04bcd04016edb71bf36";
    let units = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=${units}`;

    axios.get(apiUrl).then(showWeather);
    return (
      <div>
        <ul>
          <li>Temperature: {Math.round(temp)}°C</li>
          <li>Description: {desc}</li>
          <li>Humidity: {humid}%</li>
          <li>Wind: {wind}km/h</li>
          <li>
            <img src={icon} alt="weather icon" />
          </li>
        </ul>
      </div>
    );
  }
}
