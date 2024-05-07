// import React from "react";
// import { useState } from "react";
import { Link } from "react-router-dom";
// import Card from "react-bootstrap/Card";
import ChatBot from "react-simple-chatbot";
import { ThemeProvider } from "styled-components";
import "./Journal.css";
import Navbar from "../src/components/navbar";
import todo from "./todo.jpg";
import emu from "./emu.jpg";
import tracker from "./tracker.jpg";
import journal from "./dairy.jpg";
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
          <img src={todo} alt="todo" />
          <div className="info">
            <h1>
              <b>Todo List</b>
            </h1>
            <p>
              <i>
                " Manage tasks with features like adding, editing, and marking
                tasks as complete. "
              </i>
            </p>
            <br />
            <button>
              <Link to={`/TodoList`}>
                <b>Organize</b>
              </Link>
            </button>
          </div>
        </div>
        <div className="card">
          <img src={tracker} alt="" />
          <div className="info">
            <h1>
              <b>Tracker</b>
            </h1>
            <p>
              <i>
                "Monitor moods, expenses, or fitness progress with data input
                and visualization."
              </i>
            </p>
            <br />
            <button>
              <Link to={`/Progress`}>
                <b>Progress</b>
              </Link>
            </button>
          </div>
        </div>
        <div className="card">
          <img src={emu} />
          <div className="info">
            <h1>Chatbot</h1>
            <p>
              <i>
                "Provide interactive assistance and answer questions using a
                conversational interface."
              </i>
            </p>
            <br />
            <button>
              <Link to={`/Chatbot1`}>
                <b>Inquire</b>
              </Link>
            </button>
          </div>
        </div>
        <div className="card">
          <img src={journal} />
          <div className="info">
            <h1>
              <b>Journal</b>
            </h1>
            <p>
              <i>
                "Record personal thoughts and experiences with
                date-based organization."
              </i>
            </p>
            <br />
            <button>
              <Link to={`/Notes`}>
                <b>Reflect</b>
              </Link>
            </button>
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
