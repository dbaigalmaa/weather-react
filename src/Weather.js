import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
  let [temp, setTemp] = useState("");
  let [desc, setDesc] = useState("");
  let [humid, setHumid] = useState("");
  let [wind, setWind] = useState("");
  let [icon, setIcon] = useState("");

  let currentDate = new Date();
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
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  let day = days[currentDate.getDay()];

  let hours = currentDate.getHours();
  let minutes = currentDate.getMinutes();
  if (minutes < 10) {
    minutes = "0" + minutes;
  }

  function showWeather(response) {
    setTemp(Math.round(response.data.main.temp));
    setDesc(response.data.weather[0].description);
    setHumid(response.data.main.humidity);
    setWind(Math.round(response.data.wind.speed));
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
      <div className="Weather">
        <div className="weather-summary">
          <div className="weather-summary-header">
            <h1>{props.city}</h1>
            <div className="weather-detail__text">
              {day} {hours}:{minutes}
            </div>
            <div className="weather-detail__text">{desc}</div>
          </div>
          <div className="row">
            <div className="col-sm-6">
              <div className="clearfix">
                <div className="float-left weather-icon">
                  <img src={icon} alt="weather icon" width="40" height="40" />
                </div>
                <div className="weather-temp weather-temp--today">{temp}</div>
                <div className="weather-unit__text weather-unit__text--today">
                  °C
                </div>
              </div>
            </div>
            <div class="col-sm-6">
              <div className="weather-detail__text">
                Precipitation: {humid}%
              </div>
              <div className="weather-detail__text">Wind: {wind}km/h</div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-2">
            <div className="forecast-day">Tue</div>
            <div className="forecast-icon">
              <canvas width="38" height="38"></canvas>
            </div>
            <div className="forecast-temperature">5°</div>
          </div>
          <div className="col-sm-2">
            <div className="forecast-day">Wed</div>
            <div className="forecast-icon">
              <canvas width="38" height="38"></canvas>
            </div>
            <div class="forecast-temperature">3°</div>
          </div>
          <div class="col-sm-2">
            <div class="forecast-day">Thu</div>
            <div class="forecast-icon">
              <canvas width="38" height="38"></canvas>
            </div>
            <div class="forecast-temperature">5°</div>
          </div>
          <div class="col-sm-2">
            <div class="forecast-day">Fri</div>
            <div class="forecast-icon">
              <canvas width="38" height="38"></canvas>
            </div>
            <div class="forecast-temperature">7°</div>
          </div>
          <div class="col-sm-2">
            <div class="forecast-day">Sat</div>
            <div class="forecast-icon">
              <canvas width="38" height="38"></canvas>
            </div>
            <div class="forecast-temperature">5°</div>
          </div>
        </div>
      </div>
    );
  }
}
