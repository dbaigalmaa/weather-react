import React, { useState } from "react";
import Weather from "./Weather";

import "./App.css";

function App() {
  let [city, setCity] = useState("");
  let [search, setSearch] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    setCity(search);
  }

  function updateSearch(event) {
    setSearch(event.target.value);
  }
  return (
    <div className="App">
      <div className="weather-container">
        <h1>Weather App</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="search"
            placeholder="Enter a city"
            onChange={updateSearch}
          />
          <input type="submit" value="Search" />
        </form>
        <Weather city={city} />
      </div>
    </div>
  );
}

export default App;
