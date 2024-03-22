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
            <ul className={`menu ${menuOpen ? 'active' : ''}`}>
              <li><a href="#hero" data-after="Home">Home</a></li>
              <li><a href="#AboutMe" data-after="Service">Services</a></li>
              <li><a href="#skills" data-after="skills">Projects</a></li>
              <li><a href="#Testimonials" data-after="Testimonials">About</a></li>
              <li><a href="#contact" data-after="Contact">Contact</a></li>
            </ul>
          </nav>
          
          <div className="content">
            <div className="div-text">
              <h1>Hi, I'am Siwinile</h1>
              <h4>UX / UI Designer</h4>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Labore reprehenderit veritatis aperiam sed alias quos. Aliquid vero autem sapiente aspernatur?</p>
                <DownloadCVButton /> 
            </div>
            <div className="div-img">
              <img src={aboutMe} alt="Hero Section" />
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
