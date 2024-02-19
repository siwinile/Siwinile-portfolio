import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import "../style/Testimonial.css";

import Chuma from "../images/Chuma.png";
import Lihle from "../images/Lihle.png";
import Sbo from "../images/Sbo.png";

function Testimonials() {
  return (
    <section id="Testimonials" className="Testimonial--section">
      <Carousel fade>
        <h1>Testimonials</h1>
        <Carousel.Item>
          <div className="image-with-box">
            <img className="Chuma" src={Chuma} alt="First slide" />
            <div className="additional-content">
              <h3>Chuma Raxothi</h3>
              <p>Software Developer.</p>
            </div>
          </div>
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>I have no doubt that Siwinile would be a tremendous asset to any project or team, I look forward to the opportunity to work with her again in the future.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <div className="image-with-box">
            <img className="Lihle" src={Lihle} alt="Second slide" />
            <div className="additional-content">
              <h3>Additional Information</h3>
              <p>Software Developer.</p>
            </div>
          </div>
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>What I appreciate about Siwinile is her ability to finish a tasks in time.This is not only show cases her talent but also her commitment to going above and beyond her expectations.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <div className="d-flex justify-content-between align-items-center">
            <img className="Sbo smaller-image" src={Sbo} alt="Second slide" />
            <div className="additional-content">
              <h3>Additional Information</h3>
              <p>Some additional description or details.</p>
            </div>
          </div>
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </section>
  );
}

export default Testimonials;

