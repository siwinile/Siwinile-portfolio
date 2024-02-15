import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../style/Testimonial.css";

import Chuma from  "../pages/Chuma.jpeg";
import Lihle from  "../pages//Lihle.jpeg";
import Project3 from "../pages/Project3.jpeg";

function Testimonials() {
  return (
      <div className="carousel-wrapper">
        <h6>My Projects</h6>
        <Carousel>
        <Carousel.Item>
  <div className="carousel-item-content">
  <img className="carousel-Chuma" src={Chuma} alt="Chuma" />
<img className="carousel-Lihle" src={Lihle} alt="Lihle" />
  </div>
  <Carousel.Caption>
              <h3>Tax Calculator</h3>
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

export default Testimonials;
