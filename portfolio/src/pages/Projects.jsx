import React from 'react'
import Carousel from "react-bootstrap/Carousel";
import Project1 from "./images/Project1.PNG";
import Project2 from "./images/Project2.jpg";
import Project3 from "./images/Project3.jpeg";

function Projects() {
  return (
    <div>
      <Carousel>
        <img src={Project1} alt="Project 1" />
      </Carousel>
      <Carousel>
        <img src={Project2} alt="Project 1" />
      </Carousel>
      <Carousel>
        <img src={Project3} alt="Project 1" />
      </Carousel>
    </div>
  )
}

export default Projects
