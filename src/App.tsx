import React from "react";
import "./App.css";
import Home from "./Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Events from "./Events";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/events" Component={Events} />
          {/* <Route path="/about/:name" component={About} />
          <Route path="/contact" component={Contact} /> */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
