import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Events from "./Events";
import AboutUs from "./AboutUs";
import Skills from "./Skills";
import ContactUs from "./ContactUs";
import HomePage from "./Home";
import HomePage2 from "./theme2/HomePage";
import Events2 from "./theme2/Events";
import AboutUs2 from "./theme2/AboutUs";
import ContactUs2 from "./theme2/ContactUs";
import Skills2 from "./theme2/Skills";
import Projects from "./theme2/Projects";
import MSpaceX from "./theme2/MSpaceX";
import "./App.css";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" Component={HomePage2} />
          <Route path="/events" Component={Events2} />
          <Route path="/about-us" Component={AboutUs2} />
          <Route path="/skills" Component={Skills2} />
          <Route path="/contact-us" Component={ContactUs2} />
          <Route path="/projects" Component={Projects} />
          <Route path="/m-space-x" Component={MSpaceX} />

          <Route path="/v1/home" Component={HomePage} />
          <Route path="/v1/events" Component={Events} />
          <Route path="/v1/about-us" Component={AboutUs} />
          <Route path="/v1/skills" Component={Skills} />
          <Route path="/v1/contact-us" Component={ContactUs} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
