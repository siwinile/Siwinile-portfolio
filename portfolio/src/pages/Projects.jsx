import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../style/Projects.css";

import Project1 from "../pages/Project1.webp";
import Project2 from "../pages/Project2.jpg";
import Project3 from "../pages/Project3.jpeg";

function Projects() {
  return (
      <div className="carousel-wrapper">
        <h6>My Projects</h6>
        <Carousel>
          <Carousel.Item>
            <img className="carousel-image1" src={Project1} alt="Project 1" />
            <Carousel.Caption>
              <h3>Bank App</h3>
              <p>GitHub</p>
              <button className="carousel-button">View</button>
             
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="carousel-image2" src={Project2} alt="Project 2" />
            <Carousel.Caption>
              <h3>Financial Calculator</h3>
              
              <button className="carousel-button">View</button>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="carousel-image3" src={Project3} alt="Project 3" />
            <Carousel.Caption>
              <h3>Tax Calculator</h3>
              <p>GitHub</p>
              <button className="carousel-button">View</button>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    );
  }

export default Projects;
