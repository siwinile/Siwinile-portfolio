// import React from 'react';
import React, { useEffect } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../style/Projects.css";

import Project1 from "../pages/Project 1.jpg";
import Project2 from "../pages/Project 2.jpg";
import Project3 from "../pages/Project 3.jpg";


function Projects() {
  useEffect(() => {
    // Add event listeners to make buttons clickable
    const buttons = document.querySelectorAll('.carousel-button');
    buttons.forEach(button => {
      button.addEventListener('click', () => {
        const url = button.getAttribute('data-github-url');
        if (url) {
          window.open(url, '_blank').focus();
        }
      });
    });

    // Cleanup function to remove event listeners when component unmounts
    return () => {
      buttons.forEach(button => {
        button.removeEventListener('click', () => {});
      });
    };
  }, []);

  return (
    <section id="Projects" className="Projects--section"> 
      <div className="carousel-wrapper">
        <h6>My Projects</h6>
        <Carousel>
          <Carousel.Item>
            <img className="carousel-image1" src={Project1} alt="Project 1" />
          
              <h3>Bank App</h3>
           
            <button className="carousel-button" data-github-url="https://github.com/siwinile/bank-app">View on GitHub</button>
          </Carousel.Item>

          <Carousel.Item>
            <img className="carousel-image2" src={Project2} alt="Project 2" />
            
              <h3>Financial Calculator</h3>

           
            <button className="carousel-button" data-github-url="https://github.com/siwinile/financial-calculator">View on GitHub</button>
          </Carousel.Item>

          <Carousel.Item>
            <img className="carousel-image3" src={Project3} alt="Project 3" />
           
              <h3>Tax Calculator</h3>
           
            <button className="carousel-button" data-github-url="https://github.com/siwinile/tax-calculator">View on GitHub</button>
          </Carousel.Item>
        </Carousel>
      </div>
    </section>
  );
}

export default Projects;

