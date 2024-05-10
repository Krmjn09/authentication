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
import imgs from "./chatbotimage.png";
const steps = [
  {
    id: "0",
    message: "Hello there! 😊 What's your name?",
    trigger: "1",
  },
  {
    id: "1",
    user: true,
    trigger: "2",
  },
  {
    id: "2",
    message: "Hi {previousValue}! How can I assist you today?",
    trigger: "3",
  },
  {
    id: "3",
    options: [
      {
        value: "new_entry",
        label: "Create a new journal entry",
        trigger: "new_entry",
      },
      {
        value: "edit_entry",
        label: "Edit or delete a journal entry",
        trigger: "edit_entry",
      },
      {
        value: "customize",
        label: "Customize journal entries",
        trigger: "customize",
      },
      { value: "trackers", label: "Learn about trackers", trigger: "trackers" },
      {
        value: "security",
        label: "Data security information",
        trigger: "security",
      },
    ],
  },
  {
    id: "new_entry",
    message:
      "To create a new journal entry, go to the calendar and select the date you want to write about. Click on that date to start writing your entry.",
    end: true,
  },
  {
    id: "edit_entry",
    message:
      "You can edit or delete a journal entry by going to the calendar, clicking on the date of the entry you want to modify, and then selecting the edit or delete option.",
    end: true,
  },
  {
    id: "customize",
    message:
      "You can customize your journal entries by adding photos, changing fonts, and organizing your entries using different categories. Explore the settings to personalize your journal.",
    end: true,
  },
  {
    id: "trackers",
    message:
      "Trackers are tools that help you monitor and track specific aspects of your life, such as mood, habits, or goals. They provide insights into your daily routines and progress.",
    end: true,
  },
  {
    id: "security",
    message:
      "Your journaling data is secure and encrypted. We take data privacy seriously to ensure the confidentiality of your entries. You can adjust privacy settings in your profile for added security.",
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
  botAvatar: imgs,
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
              <b>Click EMO</b>
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
