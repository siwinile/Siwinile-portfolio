import Particles from "react-tsparticles"
import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./pages/Navbar";
import HeroSection from "./pages/HeroSection";
import AboutMe from "./pages/AboutMe";


function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Navbar />
          <HeroSection/>
          <AboutMe/>
          <Routes>
            <Route path="/" element={<pages />}></Route>
            <Route path="*" element={<div>404 Not Found</div>}></Route>
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
