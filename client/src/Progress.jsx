import React, { useState, useEffect } from "react";
import { Card, CardBody, CardTitle } from "react-bootstrap";
import Navbar from "../src/components/navbar";
import axios from "axios";
import "./Progress.css";
import MoodSelector from "./MoodSelector";
import StepCounter from "./step-counter"; // Import the StepCounter component

const Progress = () => {
  const [weather, setWeather] = useState("Loading...");
  const [isHovered, setIsHovered] = useState(false);
  const [weatherBg, setWeatherBg] = useState(""); // State for weather background class

  const handleCardHover = () => setIsHovered(true);
  const handleCardLeave = () => setIsHovered(false);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        navigator.geolocation.getCurrentPosition(async (position) => {
          const { latitude, longitude } = position.coords;
          const apiKey = "6357b7d1b9dd0385a48600971b89a509";
          const apiUrl =` https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}`;
          const response = await axios.get(apiUrl);
          const { main } = response.data.weather[0];
          setWeather(main);

          // Set background class based on weather condition
          if (main === "Clear") {
            setWeatherBg("bg-sunny");
          } else if (main === "Clouds") {
            setWeatherBg("bg-cloudy");
          } else if (main === "Rain" || main === "Drizzle") {
            setWeatherBg("bg-rainy");
          } else if (main === "Snow") {
            setWeatherBg("bg-snowy");
          } else {
            setWeatherBg("tracker"); // Default background image
          }
        });
      } catch (error) {
        console.error("Error fetching weather:", error);
        setWeather("Error");
      }
    };

    fetchWeather();
  }, []);

  return (
    <div className="prog">
      <Navbar />
      <div className="progress">
        <div className="progress-weather">
          <Card
            style={{ width: "18rem" }}
            className={`${weather} ${weatherBg} ${isHovered ? "" : "no-hover"}`}
            onMouseEnter={handleCardHover}
            onMouseLeave={handleCardLeave}
          >
            <CardBody>
              <CardTitle className="weather-text" id="hell">
                <b>&quot;Current Weather&quot;</b>
              </CardTitle>
              <p className="weather-text">{weather}</p>
            </CardBody>
          </Card>
        </div>
        {/* Add other progress components here */}
        <div className="progress-weather">
          <StepCounter
            isHovered={isHovered}
            handleCardHover={handleCardHover}
            handleCardLeave={handleCardLeave}
          />
        </div>
        <div className="progress-weather">
          <MoodSelector
            weather={weather}
            weatherBg={weatherBg}
            isHovered={isHovered}
            handleCardHover={handleCardHover}
            handleCardLeave={handleCardLeave}
          />
        </div>
      </div>
    </div>
  );
};

export default Progress;
