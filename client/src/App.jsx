import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Signup from "./Signup";
// import { useState } from "react";
import "./style.css";

import Chronicles from "./views/Chronicles";
import NotFound from "./views/not-found";
import "./input.css";
import "./output.css";
import Login from "./Login";
import Home from "./Home";
import JournalPage from "./Journal";
import TodoList from "./todolist";
import Progress from "./Progress";
import Chatbot1 from "./Chatbot1";
import Notes from "./Notes";
// import { MDBContainer, MDBRow } from 'mdb-react-ui-kit';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/register" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/home/:date" element={<JournalPage />} />
        <Route path="/" element={<Chronicles />} />
        <Route path="*" element={<NotFound />} />
        {/* <Route path="/TodoList" element={<TodoList />} />
         */}
        <Route path="/TodoList" element={<TodoList />} />
        {/* <Redirect from="/" to="/login" /> */}
        <Route path="/Progress" element={<Progress />} />
        <Route path="/Notes" element={<Notes />} />
        <Route path="/Chatbot1" element={<Chatbot1 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
