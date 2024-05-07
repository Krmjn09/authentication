import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import ChatBot from "react-simple-chatbot";
import { ThemeProvider } from "styled-components";
import updateWeather from "./weather-update.png";
import "./Progress.css";
import Navbar from "../src/components/navbar";
import {
  CardBody,
  CardTitle,
  Dropdown,
  DropdownButton,
  DropdownItem,
} from "react-bootstrap";
// import { useState } from "react";
// import { Card } from "react-bootstrap";

const Progress = () => {
  //   const [progress, setProgress] = useState(0);
  const [weather, setWeather] = React.useState("Select Weather"); // Initial dropdown selection
  const [isHovered, setIsHovered] = React.useState(false); // State for hover effect

  const handleWeatherChange = (selectedWeather) => setWeather(selectedWeather);
  const handleCardHover = () => setIsHovered(true);
  const handleCardLeave = () => setIsHovered(false);
  // Remove the unused variable and setter function
  // const [transparency, setTransparency] = React.useState(false);
  return (
    <>
      <div className="prog">
        <Navbar />
        <div className="progress">
          <div className="progress-weather">
            <Card
              style={{ width: "18rem" }}
              className={`weather ${isHovered ? "" : "no-hover"}`} // Toggle hover class
              onMouseEnter={handleCardHover}
              onMouseLeave={handleCardLeave}
            >
              <img
                src={updateWeather}
                alt="Card image"
                className="weather-image"
              />
              <CardBody>
                <CardTitle>Weather</CardTitle>
                <Dropdown as={Card.Text}>
                  <DropdownButton id="weather-dropdown" title={weather}>
                    <DropdownItem
                      as="button"
                      onClick={() => handleWeatherChange("Sunny")}
                    >
                      Sunny
                    </DropdownItem>
                    <DropdownItem
                      as="button"
                      onClick={() => handleWeatherChange("Cloudy")}
                    >
                      Cloudy
                    </DropdownItem>
                    <DropdownItem
                      as="button"
                      onClick={() => handleWeatherChange("Rainy")}
                    >
                      Rainy
                    </DropdownItem>
                    <DropdownItem
                      as="button"
                      onClick={() => handleWeatherChange("Snowy")}
                    >
                      Snowy
                    </DropdownItem>
                    <DropdownItem
                      as="button"
                      onClick={() => handleWeatherChange("Windy")}
                    >
                      Windy
                    </DropdownItem>

                    {/* Add more weather options as needed */}
                  </DropdownButton>
                </Dropdown>
              </CardBody>
            </Card>
          </div>

          <div className="progress-Steps">
            <Card style={{ width: "18rem" }} className="weather">
              <Card.Body>
                <Card.Title>Steps</Card.Title>
                <Card.Text></Card.Text>
              </Card.Body>
            </Card>
          </div>
          {/* <div className="progress-">
            <Card style={{ width: "18rem" }} className="weather">
              <Card.Body>
                <Card.Title>Weather</Card.Title>
                <Card.Text></Card.Text>
              </Card.Body>
            </Card>
          </div> */}
          {/* <div className="progress-weather">
            <Card style={{ width: "18rem" }} className="weather">
              <Card.Body>
                <Card.Title>Weather</Card.Title>
                <Card.Text></Card.Text>
              </Card.Body>
            </Card>
          </div> */}
          {/* <Card style={{ width: "18rem" }}>
            <Card.Body>
              <Card.Title>Progress</Card.Title>
              <Card.Text>
                <h1>{progress}%</h1>
                <button onClick={() => setProgress(progress + 10)}>
                  Add 10%
                </button>
                <button onClick={() => setProgress(progress - 10)}>
                  Subtract 10%
                </button>
              </Card.Text>
            </Card.Body>
        </Card> */}
        </div>
      </div>
    </>
  );
};
export default Progress;
