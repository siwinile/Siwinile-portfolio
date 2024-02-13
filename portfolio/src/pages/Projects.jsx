import React from "react";
import "../style/Projects.css";
import Projects from "../images/images.jpg"


const Slideshow = ({ images }) => {
  const [currentSlide, setCurrentSlide] = React.useState(0);

  const handleNextSlide = () => {
    setCurrentSlide((currentSlide + 1) % images.length);
  };

  const handlePrevSlide = () => {
    setCurrentSlide(
      (currentSlide - 1 + images.length) % images.length
    );
  };

  return (
    <div className="slideshow">
      <div className="slideshow-slide">
        <img src={images[currentSlide].image} alt={images[currentSlide].caption} />
        <div className="slideshow-caption">{images[currentSlide].caption}</div>
      </div>
      <button className="slideshow-prev" onClick={handlePrevSlide}>
        ❮
      </button>
      <button className="slideshow-next" onClick={handleNextSlide}>
        ❯
      </button>
    </div>
  );
};

export default Slideshow;