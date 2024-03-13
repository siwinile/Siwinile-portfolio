import React from 'react';
import "../style/Hero.css";
import aboutMe from "../images/abutMe.png";
import video from  "../assets/backgroundvideo.mp4";


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

export default function HeroSection() {
  return (
    <header id="header" style={{ backgroundColor: 'none'}}>
      <video autoPlay muted loop id="video-background">
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <section id="heroSection" className="hero--section">
        <div className="hero--section--content--box">
          <div className="hero--section--content">
            <p className="section--title"></p>
            <h1 className="hero--section--title">
              <span className="hero--section-title--color">Siwinile Mdani</span>
              <br />
            </h1>
            <p className="hero--section-description">
              I am an intern software developer.<br/> This website serves as my portfolio where you can <br/>find information about me, my skills, <br/>and contact information. Explore to learn more.
            </p>
          </div>
          <DownloadCVButton /> 
        </div>
        <div className="hero--section--img">
          <img src={aboutMe} alt="Hero Section" />
        </div>
      </section>
    </header>
  );
}
