// import React from "react";
// import { useState } from "react";
import { Link } from "react-router-dom";
// import Card from "react-bootstrap/Card";
import ChatBot from "react-simple-chatbot";
import { ThemeProvider } from "styled-components";
import "./Journal.css";
import Navbar from "../src/components/navbar";
const steps = [
  {
    id: "0",
    message: "Hey Geek!",

    // This calls the next id
    // i.e. id 1 in this case
    trigger: "1",
  },
  {
    id: "1",

    // This message appears in
    // the bot chat bubble
    message: "Please write your username",
    trigger: "2",
  },
  {
    id: "2",

    // Here we want the user
    // to enter input
    user: true,
    trigger: "3",
  },
  {
    id: "3",
    message: " hi {previousValue}, how can I help you?",
    trigger: 4,
  },
  {
    id: "4",
    options: [
      // When we need to show a number of
      // options to choose we create alist
      // like this
      { value: 1, label: "View Courses" },
      { value: 2, label: "Read Articles" },
    ],
    end: true,
  },
];

// Creating our own theme
const theme = {
  background: "#efdcf9",
  headerBgColor: "#36013f",
  headerFontSize: "20px",
  botBubbleColor: "#05445e",
  headerFontColor: "white",
  botFontColor: "white",
  userBubbleColor: "#323b36",
  userFontColor: "white",
};

// Set some properties of the bot
const config = {
  botAvatar: "./chatbotimage.png",
  floating: true,
};

import "./Journal.css";
const JournalPage = () => {
  return (
    <>
      <Navbar />
      <div className="wrapper">
        <div className="card">
          <img src="https://images.unsplash.com/photo-1477666250292-1419fac4c25c?auto=format&amp;fit=crop&amp;w=667&amp;q=80&amp;ixid=dW5zcGxhc2guY29tOzs7Ozs%3D" />
          <div className="info">
            <h1>Mountain</h1>
            <p>
              Lorem Ipsum is simply dummy text from the printing and typeseting
              industry
            </p>
            <button>
              <Link to={`/TodoList`}>Read More</Link>
            </button>
          </div>
        </div>
        <div className="card">
          <img src="https://images.unsplash.com/photo-1477666250292-1419fac4c25c?auto=format&amp;fit=crop&amp;w=667&amp;q=80&amp;ixid=dW5zcGxhc2guY29tOzs7Ozs%3D" />
          <div className="info">
            <h1>Mountain</h1>
            <p>
              Lorem Ipsum is simply dummy text from the printing and typeseting
              industry
            </p>
            <button>Read More</button>
          </div>
        </div>
        <div className="card">
          <img src="https://images.unsplash.com/photo-1425342605259-25d80e320565?auto=format&amp;fit=crop&amp;w=750&amp;q=80&amp;ixid=dW5zcGxhc2guY29tOzs7Ozs%3D" />
          <div className="info">
            <h1>Road</h1>
            <p>
              Lorem Ipsum is simply dummy text from the printing and typeseting
              industry
            </p>
            <button>Read More</button>
          </div>
        </div>
        <div className="card">
          <img src="https://images.unsplash.com/photo-1503249023995-51b0f3778ccf?auto=format&amp;fit=crop&amp;w=311&amp;q=80&amp;ixid=dW5zcGxhc2guY29tOzs7Ozs%3D" />
          <div className="info">
            <h1>Protester</h1>
            <p>
              Lorem Ipsum is simply dummy text from the printing and typeseting
              industry
            </p>
            <button>Read More</button>
          </div>
        </div>
      </div>
      <div className="App">
        <ThemeProvider theme={theme}>
          <ChatBot
            // This appears as the header
            // text for the chat bot
            headerTitle="Hello! I am emo ^_^"
            steps={steps}
            {...config}
          />
        </ThemeProvider>
      </div>
    </>
  );
};

export default JournalPage;
