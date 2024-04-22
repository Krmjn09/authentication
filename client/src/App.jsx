import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Signup from "./Signup";
import { useState } from "react";

import Login from "./Login";
import Home from "./Home";
import JournalPage from "./JournalPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/register" element={<Signup />} />
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/home/:date" element={<JournalPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
