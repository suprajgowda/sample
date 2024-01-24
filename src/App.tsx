import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Events from "./Events";
import AboutUs from "./AboutUs";
import Skills from "./Skills";
import ContactUs from "./ContactUs";
import HomePage from "./Home";
import HomePage2 from "./theme2/HomePage";
import Events2, { Conference, Workshops } from "./theme2/Events";
import AboutUs2 from "./theme2/AboutUs";
import ContactUs2 from "./theme2/ContactUs";
import Skills2 from "./theme2/Skills";
import Projects from "./theme2/Projects";
import MSpaceX from "./theme2/MSpaceX";
import Login, { Register } from "./Login";
import DashBoard from "./DashBoard";
import "firebase/firestore";
import "firebase/auth";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import ReactGA from "react-ga4";
import "./App.css";

const firebaseConfig = {
  apiKey: "AIzaSyBhXpy3TvXhlR_11ws5PrcaxQ-j3X6s5uI",
  authDomain: "maple-tech-x.firebaseapp.com",
  projectId: "maple-tech-x",
  storageBucket: "maple-tech-x.appspot.com",
  messagingSenderId: "125669444876",
  appId: "1:125669444876:web:a6a613b4a09a0192fe0d29",
  measurementId: "G-FSRQZBK6QS",
};

const app = initializeApp(firebaseConfig);
export const textDB = getFirestore(app);
export const database = getAuth(app);

ReactGA.initialize("G-RKJZBBSC7C");

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" Component={HomePage2} />
          <Route path="/events/hackathons" Component={Events2} />
          <Route path="/events/workshops" Component={Workshops} />
          <Route path="/events/conference" Component={Conference} />
          <Route path="/about-us" Component={AboutUs2} />
          <Route path="/skills" Component={Skills2} />
          <Route path="/contact-us" Component={ContactUs2} />
          <Route path="/projects" Component={Projects} />
          <Route path="/m-space-x" Component={MSpaceX} />
          <Route path="/dashboard" Component={DashBoard} />
          <Route path="/login" Component={Login} />
          <Route path="/register" Component={Register} />

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
