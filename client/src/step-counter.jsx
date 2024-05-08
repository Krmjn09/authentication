import React, { useState } from "react";
import { Card, CardBody, CardTitle, Dropdown, DropdownButton, DropdownItem } from "react-bootstrap";
import "./StepCounter.css"; // Assuming you have a CSS file for styling
// import stepImage from "./stepImage.jpg"; // Assuming you have an image for the step count
// import MoodSelector from "./MoodSelector"; // Assuming you already have the MoodSelector component
import exp from "./rainy.jpg";
const StepCounter = ({ isHovered, handleCardHover, handleCardLeave }) => {
  const [stepCount, setStepCount] = useState("Select Step Count");

  const handleStepCountChange = (count) => setStepCount(count);

  return (
    <div className="step-counter">
      <Card
        style={{ width: "18rem" }}
        className={`step-card ${isHovered ? "" : "no-hover"}`}
        onMouseEnter={handleCardHover}
        onMouseLeave={handleCardLeave}
      >
        <img src={exp} alt="" />
        <CardBody>
          <CardTitle>Step Count</CardTitle>
          <Dropdown as={Card.Text}>
            <DropdownButton id="step-dropdown" title={stepCount}>
              <DropdownItem
                as="button"
                onClick={() => handleStepCountChange("500-1000 steps")}
              >
                500-1000 steps
              </DropdownItem>
              <DropdownItem
                as="button"
                onClick={() => handleStepCountChange("1000-2000 steps")}
              >
                1000-2000 steps
              </DropdownItem>
              {/* Add more step count options as needed */}
            </DropdownButton>
          </Dropdown>
        </CardBody>
      </Card>
    </div>
  );
}

export default StepCounter;
