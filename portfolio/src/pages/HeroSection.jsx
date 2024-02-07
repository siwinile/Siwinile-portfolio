import React from 'react'
import "../style/Hero.css"
import HeroImage from "../images/heroimage.png"


export default function HeroSection() {
  return (
    <>
     <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title">I am Siwinile</p>
          <h1 className="hero--section--title">
            <span className="hero--section-title--color">Full Stack</span>{" "}
            <br />
            Developer
          </h1>
          <p className="hero--section-description">
            I am intern software developer this website serve as my portfolio 
            <br /> where you can find information about me,my skills and contact infor. Explore to leran more .
          </p>
        </div>
        <button className="btn btn-primary">Get In Touch</button>
      </div>
      <div className="hero--section--img">
        <img src={HeroImage} alt="Hero Section" />
      </div>
    </section>    

    
    
</>
  )
}
