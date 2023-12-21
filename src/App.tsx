import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Events from "./Events";
import AboutUs from "./AboutUs";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/events" Component={Events} />
          <Route path="/about-us" Component={AboutUs} />
          {/* <Route path="/about/:name" component={About} />
          <Route path="/contact" component={Contact} /> */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
