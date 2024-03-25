import React, { useState } from 'react';
import '../style/Hero.css'; // Import your CSS file
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import video from "../assets/backgroundvideo.mp4";
import aboutMe from "../images/abutMe.png";
import image from "../images/1.png";

const DownloadCVButton = () => {
  const handleDownload = () => {
    const downloadLink = document.createElement('a');
    downloadLink.href = '.assets/Resume.pdf'; 
    downloadLink.download = 'Resume.pdf'; 
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };

  return (
    <button onClick={handleDownload} className="btn btn-primary">
      Download CV
    </button>
  );
};

const Portfolio = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header id="header" style={{ backgroundColor: 'none'}}>
      <video autoPlay muted loop id="video-background">
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="contanier">
        <div className="hero">
          <nav>
            <input type="checkbox" id="menu-toggle" checked={menuOpen} onChange={toggleMenu} />
            <label htmlFor="menu-toggle" className="hamburger">&#9776;</label>
            <img src={image} alt="logo" className="logo" />
            <ul className={`menu ${menuOpen ? 'active' : ''}`}>
              <li><a href="#hero" data-after="Home">Home</a></li>
              <li><a href="#AboutMe" data-after="About">About</a></li>
              <li><a href="#skills" data-after="skills">Skills</a></li>
              <li><a href="#Testimonials" data-after="Testimonials">Testimonials</a></li>
              <li><a href="#Contact" data-after="Contact">Contact</a></li>
            </ul>
          </nav>
          
          <div className="content">
            <div className="div-text">
              <h1>Hi, I'm Siwinile</h1>
              <h4>Software Developer/UX / UI Designer</h4>
              <p>I am an intern software developer.This website serves as my portfolio where you can find information about me, my skills,and contact information. Explore to learn more.</p>
                <DownloadCVButton /> 
            </div>
            <div className="div-img">
              <img src={aboutMe} alt="Hero Section" />
            </div>
          </div>
          <div className="soc-link">
                    <a href="https://www.instagram.com/winnieeuchar/"><i class="fa-brands fa-square-facebook"></i></a>
                    <a href="https://www.facebook.com/umbali.author"><i class="fa-brands fa-instagram"></i></a>
                    <a href="https://www.linkedin.com/in/siwinile-mdani-a78b58253/"><i class="fa-brands fa-linkedin"></i></a>
                    <a href="#"><i class="fa-brands fa-square-twitter"></i></a>
                    <a href="#"><i class="fa-brands fa-square-whatsapp"></i></a>
                </div>
        </div>
      </div>
    </header>
  );
}

export default Portfolio;
