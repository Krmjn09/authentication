import React, { useRef, useEffect, useState } from "react";
import "./DrawingBoard.css"; // Importing CSS file for styling

const DrawingBoard = () => {
  const canvasRef = useRef(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [lastX, setLastX] = useState(0);
  const [lastY, setLastY] = useState(0);
  const [mode, setMode] = useState("draw"); // Default mode is drawing

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    context.strokeStyle = "black";
    context.lineJoin = "round";
    context.lineCap = "round";
    context.lineWidth = 5;

    const clearCanvas = () => {
      context.clearRect(0, 0, canvas.width, canvas.height);
    };

    const startDrawing = (e) => {
      if (e.type === "mousedown") {
        setIsDrawing(true);
        setLastX(e.nativeEvent.offsetX);
        setLastY(e.nativeEvent.offsetY);
      }
    };

    const draw = (e) => {
      if (!isDrawing) return;
      if (e.type === "mousemove") {
        context.beginPath();
        context.moveTo(lastX, lastY);
        context.lineTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
        context.stroke();
        setLastX(e.nativeEvent.offsetX);
        setLastY(e.nativeEvent.offsetY);
      }
    };

    const stopDrawing = () => {
      setIsDrawing(false);
    };

    const handleKeyDown = (e) => {
      e.preventDefault(); // Prevent default typing behavior in the canvas
    };

    const canvasElement = canvasRef.current;
    canvasElement.addEventListener("mousedown", startDrawing);
    canvasElement.addEventListener("mousemove", draw);
    canvasElement.addEventListener("mouseup", stopDrawing);
    canvasElement.addEventListener("mouseout", stopDrawing);
    canvasElement.addEventListener("keydown", handleKeyDown); // Handle typing events

    return () => {
      canvasElement.removeEventListener("mousedown", startDrawing);
      canvasElement.removeEventListener("mousemove", draw);
      canvasElement.removeEventListener("mouseup", stopDrawing);
      canvasElement.removeEventListener("mouseout", stopDrawing);
      canvasElement.removeEventListener("keydown", handleKeyDown);
    };
  }, [isDrawing]);

  const handleClearCanvas = () => {
    const canvas = canvasRef.current;
    if (canvas) {
      const context = canvas.getContext("2d");
      context.clearRect(0, 0, canvas.width, canvas.height);
    }
  };

  const handleSaveDrawing = () => {
    const canvas = canvasRef.current;
    const image = canvas.toDataURL(); // Convert canvas to base64 image data
    // You can now send this 'image' to your backend for saving or further processing
    console.log(image); // For demonstration, log the image data to console
  };

  const handleSubmitDrawing = () => {
    // Add your logic for submitting the drawing
    alert("Drawing submitted!"); // For demonstration, show an alert
  };

  const handleModeChange = (e) => {
    setMode(e.target.value);
  };

  const handleUploadImage = (e) => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    const img = new Image();
    img.onload = () => {
      context.drawImage(img, 0, 0);
    };
    img.src = URL.createObjectURL(e.target.files[0]);
  };

  const handleTextInput = (e) => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    const text = e.target.value;
    context.font = "30px Arial";
    context.fillStyle = "black";
    context.fillText(text, 50, 50);
  };

  return (
    <div className="drawing-board-container">
      <canvas
        ref={canvasRef}
        width={800}
        height={600}
        className="drawing-canvas"
        tabIndex="0" // Make canvas focusable to receive keyboard events
      />
      <div className="tools-container">
        <label>
          <input
            type="radio"
            value="draw"
            checked={mode === "draw"}
            onChange={handleModeChange}
          />
          Draw
        </label>
        <label>
          <input
            type="radio"
            value="text"
            checked={mode === "text"}
            onChange={handleModeChange}
          />
          Text
        </label>
        <label>
          <input
            type="radio"
            value="paint"
            checked={mode === "paint"}
            onChange={handleModeChange}
          />
          Paint
        </label>
        <input type="file" accept="image/*" onChange={handleUploadImage} />
      </div>
      {mode === "text" && (
        <div className="text-input-container">
          <input
            type="text"
            placeholder="Enter text"
            onChange={handleTextInput}
          />
        </div>
      )}
      <div className="button-container">
        <button onClick={handleClearCanvas}>Clear</button>
        <button onClick={handleSaveDrawing}>Save</button>
        <button onClick={handleSubmitDrawing}>Submit</button>
      </div>
    </div>
  );
};

export default DrawingBoard;
