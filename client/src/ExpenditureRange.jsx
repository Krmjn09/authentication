import React, { useState } from "react";
import { Card, CardBody, CardTitle, Dropdown, DropdownButton, DropdownItem } from "react-bootstrap";
import "./ExpenditureRange.css"; // Assuming you have a CSS file for styling
import exp from "./tracker.jpg"; // Assuming you have an image for the expenditure range

const ExpenditureRange = ({ isHovered, handleCardHover, handleCardLeave }) => {
  const [expenditureRange, setExpenditureRange] = useState("Select Expenditure Range");

  const handleExpenditureRangeChange = (range) => setExpenditureRange(range);

  return (
    <div className="expenditure-range">
      <Card
        style={{ width: "18rem" }}
        className={`expenditure-card ${isHovered ? "" : "no-hover"}`}
        onMouseEnter={handleCardHover}
        onMouseLeave={handleCardLeave}
      >
        <img src={exp} alt="" />
        <CardBody>
          <CardTitle>Expenditure Range</CardTitle>
          <Dropdown as={Card.Text} className="dd">
            <DropdownButton id="expenditure-dropdown" title={expenditureRange}>
              <DropdownItem
                as="button"
                onClick={() => handleExpenditureRangeChange("$0 - $100")}
              >
                $0 - $100
              </DropdownItem>
              <DropdownItem
                as="button"
                onClick={() => handleExpenditureRangeChange("$100 - $200")}
              >
                $100 - $200
              </DropdownItem>
              {/* Add more expenditure range options as needed */}
            </DropdownButton>
          </Dropdown>
        </CardBody>
      </Card>
    </div>
  );
}

export default ExpenditureRange;
