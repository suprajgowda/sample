import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Events from "./Events";
import AboutUs from "./AboutUs";
import Skills from "./Skills";
import ContactUs from "./ContactUs";
import HomePage2 from "./theme2/HomePage";
import HomePage from "./Home";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" Component={HomePage2} />
          <Route path="/home" Component={HomePage} />
          <Route path="/events" Component={Events} />
          <Route path="/about-us" Component={AboutUs} />
          <Route path="/skills" Component={Skills} />
          <Route path="/contact-us" Component={ContactUs} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
