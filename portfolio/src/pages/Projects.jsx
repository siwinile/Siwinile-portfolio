import React from "react";
import "../style/Projects.css";
import Images from "../images/images.jpg"


// Projects.js
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import carousel styles

const Projects = () => {
  const projects = [
    {
      title: 'Project  1',
      imageUrl: 'path-to-image-1.jpg',
      description: 'Description for Project  1'
    },
    {
      title: 'Project  2',
      imageUrl: 'path-to-image-2.jpg',
      description: 'Description for Project  2'
    },
    // ... more projects
  ];

  return (
    <div className="projects-section">
      <h2>Projects</h2>
      <Carousel>
        {projects.map((project, index) => (
          <div key={index}>
            <img src={project.imageUrl} alt={project.title} />
            <p className="legend">{project.description}</p>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Projects;
