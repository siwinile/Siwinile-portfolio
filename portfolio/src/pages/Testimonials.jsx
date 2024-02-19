import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import "../style/Testimonial.css";

import Chuma from "../images/Chuma.png";
import Lihle from "../images/Lihle.png";
import Sbo from "../images/Sbo.png";

function Testimonials() {
  return (
    <section id="Testimonials" className="testimonial-section">
      <Carousel fade>
        <h1>Testimonials</h1>
        <Carousel.Item>
          <div className="testimonial-item">
            <div className="image-container">
              <img className="Chuma" src={Chuma} alt="Chuma Raxothi" />
            </div>
            <div className="additional-content">
              <h3>Chuma Raxothi</h3>
              <p>Software Developer.</p>
            </div>
          </div>
          <Carousel.Caption>
            <p className="slide-label">First slide label</p>
            <p className="slide-text">I have no doubt that Siwinile would be a tremendous asset to any project or team. I look forward to the opportunity to work with her again in the future.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <div className="testimonial-item">
            <div className="image-container">
              <img className="Lihle" src={Lihle} alt="Lihle" />
            </div>
            <div className="additional-content">
              <h3>Additional Information</h3>
              <p>Software Developer.</p>
            </div>
          </div>
          <Carousel.Caption>
            <p className="slide-label">Second slide label</p>
            <p className="slide-text">What I appreciate about Siwinile is her ability to finish tasks on time. This showcases not only her talent but also her commitment to going above and beyond expectations.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <div className="testimonial-item">
            <div className="image-container">
              <img className="Sbo" src={Sbo} alt="Sbo" />
            </div>
            <div className="additional-content">
              <h3>Additional Information</h3>
              <p>Some additional description or details.</p>
            </div>
          </div>
          <Carousel.Caption>
            <p className="slide-label">Third slide label</p>
            <p className="slide-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </section>
  );
}

export default Testimonials;

