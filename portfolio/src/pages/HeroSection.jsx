import React from 'react';
import "../style/Hero.css";
import aboutMe from "../images/abutMe.png";

export default function HeroSection() {
  return (
    <>
      <section id="heroSection" className="hero--section">
        <div className="hero--section--content--box">
          <div className="hero--section--content">
            <p className="section--title"></p>
            <h1 className="hero--section--title">
              <span className="hero--section-title--color">Siwinile Mdani</span>
              <br />
            </h1>
            <p className="hero--section-description">
              I am an intern software developer. This website serves as my portfolio where you can find information about me, my skills, and contact information. Explore to learn more.
            </p>
          </div>
          <button className="btn btn-primary">Get In Touch</button>
        </div>
        <div className="hero--section--img">
          <img src={aboutMe} alt="Hero Section" />
        </div>
      </section>
    </>
  )
}
