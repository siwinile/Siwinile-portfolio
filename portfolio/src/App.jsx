
import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./pages/Navbar";
import HeroSection from "./pages/HeroSection";
import AboutMe from "./pages/AboutMe";
import SkillSection from "./pages/SkillSection";
import Projects from "./pages/Projects";
import Testimonials from "./pages/Testimonials";
import Contact from "./pages/Contact";
import Footer from "./pages/footer";
// import ParticlesBackground from "./component/ParticlesBackground";






function App() {
  return (
    <div className="App">
      <Router>
        <div>
          {/* <Navbar /> */}
          <HeroSection/>
          <AboutMe/>
          <SkillSection/>
          <Projects/>
          <Testimonials/>
          <Contact/>
          <Footer/>
          {/* <ParticlesBackground/> */}
          
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
