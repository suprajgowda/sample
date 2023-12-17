import React from "react";
import "./App.css";
import ResponsiveAppBar from "./ResponsiveAppBar";
import ResponsiveAppBar2 from "./ResponsiveAppBar2";
import Footer from "./Footer";
import Home from "./Home";

function App() {
  return (
    <>
      <ResponsiveAppBar />
      <ResponsiveAppBar2 />
      <Home />
      <Footer />
    </>
  );
}

export default App;
