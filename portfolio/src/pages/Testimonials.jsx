import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import "../style/Testimonial.css";

import Chuma from "../images/Chuma.png";
import Lihle from "../images/Lihle.png";
import Sbo from "../images/Sbo.png";

function Testimonials() {
  return (
    <section id="Testimonials" className="testimonial-section">
      <h1>Testimonials</h1>
      <Carousel fade>
        <Carousel.Item>
          <div className="testimonial-container">
            <div className="testimonial-item">
              <div className="image-container">
                <img className="Chuma" src={Chuma} alt="Chuma Raxothi" />
              </div>
              <div className="additional-content">
                <h3>Chuma Raxothi</h3>
                <p className="slide-text">I have no doubt that Siwinile would <br/>be a tremendous asset to any project or team.<br/> I look forward to the opportunity to work with her again in the future.</p>
              </div>
            </div>
          </div>
        </Carousel.Item>

        <Carousel.Item>
          <div className="testimonial-container">
            <div className="testimonial-item">
              <div className="image-container">
                <img className="Lihle" src={Lihle} alt="Lihle" />
              </div>
              <div className="additional-content">
                <h3>Thembelihle Biyana</h3>
                <p className="slide-text">What I appreciate about Siwinile is her ability to finish tasks in time.<br/>
                This shows commitment and going above and beyond expectations.</p>
              </div>
            </div>
          </div>
        </Carousel.Item>

        <Carousel.Item>
          <div className="testimonial-container">
            <div className="testimonial-item">
              <div className="image-container">
                <img className="Sbo" src={Sbo} alt="Sbo" />
              </div>
              <div className="additional-content">
                <h3>Sibongile Gumbi</h3>
                <p className="slide-text">Siwinile is easy to work with-always collaborative,<br/> open to feedback, and positive force within a team.</p>
              </div>
            </div>
          </div>
        </Carousel.Item>
      </Carousel>
    </section>
  );
}

export default Testimonials;
