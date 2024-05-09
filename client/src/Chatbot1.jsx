import React, { useState, useEffect } from "react";
import "./Chatbot1.css"; // Import your CSS file for styling

const Chatbot1 = () => {
  const [messages, setMessages] = useState([]); // State to manage chat messages
  const [currentTopic, setCurrentTopic] = useState(""); // State to track current topic
  const [options, setOptions] = useState([]); // State to manage dynamic options

  // Sample data (replace with API calls or database access)
  const topics = {
    Home: ["View Courses", "Read Articles", "Contact Us"],
    Courses: ["Software Development", "Data Science", "Design Thinking"],
    Articles: ["Latest Tech Trends", "Career Advice", "Productivity Hacks"],
  };

  useEffect(() => {
    // Initialize with default options
    setOptions(topics["Home"]);
  }, []); // Empty dependency array to run only once on component mount

  const handleOptionSelect = (option) => {
    // Add user selected option to messages state
    setMessages([...messages, { text: option, isUser: true }]);

    // Update current topic and options based on selection
    if (option in topics) {
      setCurrentTopic(option);
      setOptions(topics[option]);
    } else {
      // Handle invalid selection
      setMessages([
        ...messages,
        { text: "Sorry, that option isn't available yet.", isUser: false },
      ]);
    }
  };

  return (
    <div className="chat-interface">
      <div className="chat-area">
        {/* Display chat messages */}
        {messages.map((message, index) => (
          <div
            key={index}
            className={message.isUser ? "user-message" : "bot-message"}
          >
            {message.text}
          </div>
        ))}
      </div>
      <div className="chat-topic">
        {currentTopic ? `Current Topic: ${currentTopic}` : "Welcome!"}
      </div>
      <div className="options">
        {options.map((option) => (
          <button key={option} onClick={() => handleOptionSelect(option)}>
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Chatbot1;
