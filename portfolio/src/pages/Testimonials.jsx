import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import "../style/Testimonial.css";

import Chuma from "../images/Chuma.png";
import Lihle from "../images/Lihle.jpg";
import Sbo from "../images/Sbo.jpg";

function Projects() {
    return (
      <Carousel fade>
        <h1>Testimonials</h1>
  <Carousel.Item>
    <div className="image-with-box">
      <img className="Chuma" src={Chuma} alt="First slide" />
      <div className="additional-content">
        {/* Additional content here */}
        <h3>Additional Information</h3>
        <p>Some additional description or details.</p>
      </div>
    </div>
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>

        <Carousel.Item>
          <img className="Lihle"src={Lihle} alt="Second slide" />
          <div className="additional-content">
        {/* Additional content here */}
        <h3>Additional Information</h3>
        <p>Some additional description or details.</p>
      </div>
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="Sbo" src={Sbo} alt="Third slide" />
          <div className="additional-content">
        {/* Additional content here */}
        <h3>Additional Information</h3>
        <p>Some additional description or details.</p>
      </div>
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
}

export default Projects;
