import React from "react";
import "./App.css";
import ResponsiveAppBar from "./ResponsiveAppBar";
import ResponsiveAppBar2 from "./ResponsiveAppBar2";
import Footer from "./Footer";
import Home from "./Home";
import NewsLetter from "./NewsLetter";

function App() {
  return (
    <>
      <ResponsiveAppBar />
      <ResponsiveAppBar2 />
      <Home />
      <NewsLetter />
      <Footer />
    </>
  );
}

export default App;
