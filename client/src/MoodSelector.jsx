import React, { useState } from "react";
import { Card, CardBody, CardTitle, Dropdown, DropdownButton, DropdownItem } from "react-bootstrap";
import HappyImage from "./happy.jpg";
import SadImage from "./sad.jpg";
import AngryImage from "./angry.jpg";
import CalmImage from "./calm.jpg";
import "./mood.css";
import mooddd from "./mooddd.jpg"
const MoodSelector = ({ weather, weatherBg, isHovered, handleCardHover, handleCardLeave }) => {
  const [selectedMood, setSelectedMood] = useState("Select Mood");

  const handleMoodChange = (mood) => setSelectedMood(mood);

  return (
    <div className="mood-selector">
      <Card
        style={{ width: "18rem" }}
        className={`mood-card ${isHovered ? "" : "no-hover"}`}
        onMouseEnter={handleCardHover}
        onMouseLeave={handleCardLeave}
      >
        <img src={mooddd} alt="" />
        {selectedMood === "Happy" && <img src={HappyImage} alt="Happy mood" className="mood-image" />}
        {selectedMood === "Sad" && <img src={SadImage} alt="Sad mood" className="mood-image" />}
        {selectedMood === "Angry" && <img src={AngryImage} alt="Angry mood" className="mood-image" />}
        {selectedMood === "Calm" && <img src={CalmImage} alt="Calm mood" className="mood-image" />}
        <CardBody>
          <CardTitle>Mood</CardTitle>
          <Dropdown as={Card.Text}>
            <DropdownButton id="mood-dropdown" title={selectedMood}>
              <DropdownItem
                as="button"
                onClick={() => handleMoodChange("Happy")}
              >
                Happy
              </DropdownItem>
              <DropdownItem
                as="button"
                onClick={() => handleMoodChange("Sad")}
              >
                Sad
              </DropdownItem>
              <DropdownItem
                as="button"
                onClick={() => handleMoodChange("Angry")}
              >
                Angry
              </DropdownItem>
              <DropdownItem
                as="button"
                onClick={() => handleMoodChange("Calm")}
              >
                Calm
              </DropdownItem>
              {/* Add more mood options as needed */}
            </DropdownButton>
          </Dropdown>
        </CardBody>
      </Card>
    </div>
  );
}

export default MoodSelector;
