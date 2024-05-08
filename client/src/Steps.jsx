import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import "./steps.css";
function StepInput() {

  const [steps, setSteps] = useState(0);

  const handleStepsChange = (e) => {
    setSteps(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can perform any action here with the steps value, such as submitting it to a server or storing it in state
    console.log("Steps:", steps);
  };

  return (
    <div className='stepform'>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="steps">
          <Form.Label>Number of Steps:</Form.Label>
          <Form.Control type="number" value={steps} onChange={handleStepsChange} />
        </Form.Group>
        <br />
        <Button variant="primary" type="submit" className='sbutton'>
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default StepInput;
