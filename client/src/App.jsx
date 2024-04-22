import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Signup from "./Signup";
// import { useState } from "react";
import "./style.css";
import Chronicles from "./views/Chronicles";
import NotFound from "./views/not-found";

import Login from "./Login";
import Home from "./Home";
import JournalPage from "./JournalPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/register" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/home/:date" element={<JournalPage />} />
        <Route path="/chronicles" element={<Chronicles />} />
        <Route path="*" element={<NotFound />} />
        {/* <Redirect from="/" to="/login" /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
