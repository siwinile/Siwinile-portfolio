// import React, { useEffect, useRef } from 'react';
// import { TweenMax, Power2, Power3, Expo, Circ } from 'gsap';
// import "../style/Hero.css";
// import aboutMe from "../images/abutMe.jpeg";
// import video from "../assets/backgroundvideo.mp4";
import React from 'react';
import '../style/Hero.css'; // Import your CSS file
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import video from "../assets/backgroundvideo.mp4";
import aboutMe from "../images/abutMe.jpeg";

const Portfolio = () => {
  return (
    <header id="header" style={{ backgroundColor: 'none'}}>
      <video autoPlay muted loop id="video-background">
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="contanier">
        <div className="hero">
          <nav>
            <a href="#" className="logo">Zula</a>

            <div className="nav-links">
              <a className="active" href="#">home</a>
              <a href="#">about</a>
              <a href="#">portfolio</a>
              <a href="#">services</a>
              <a href="#">contact</a>
            </div>
          </nav>

          <div className="content">
            <div className="div-text">
              <h1>Hi, I'am Zula</h1>
              <h4>UX / UI Designer</h4>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Labore reprehenderit veritatis aperiam sed alias quos. Aliquid vero autem sapiente aspernatur?</p>
              <a href="#" className="btn">My Works</a>
            </div>

            <div className="div-img">
              <img src="../images/abutMe.jpeg"alt="" />
            </div>
          </div>

          <div className="soc-link">
            <a href=""><FontAwesomeIcon icon={faFacebookF} /></a>
            <a href=""><FontAwesomeIcon icon={faTwitter} /></a>
            <a href=""><FontAwesomeIcon icon={faInstagram} /></a>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Portfolio;
