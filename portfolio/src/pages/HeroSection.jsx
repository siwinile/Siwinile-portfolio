import React from 'react'
import "../style/Hero.css"
import abutMe from "../images/abutMe.png"

export default function HeroSection() {
  return (
    <>
     <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title"></p>
          <h1 className="hero--section--title">
            <span className="hero--section-title--color">Siwinile Mdani</span>{" "}
            <br />
            
          </h1>
          <p className="hero--section-description">
            I am intern software developer this website serve as my portfolio 
            <br /> where you can find information about me,my skills and contact infor. Explore to leran more .
          </p>
        </div>
        <button className="btn btn-primary">Get In Touch</button>
      </div>
      <div className="hero--section--img">
        <img src={abutMe} alt="Hero Section" />
      </div>
    </section>    

    
    
</>
  )
}
