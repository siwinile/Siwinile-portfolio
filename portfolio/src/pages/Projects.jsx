import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../style/Projects.css";

import Project1Image from "../pages/Project 1.jpg";
import Project2Image from "../pages/Project 2.jpg";
import Project3Image from "../pages/Project 3.jpg";
import Project4Image from "../pages/Project 4.jpg";
import Project5Image from "../pages/Project 5.jpg";
import Project6Image from "../pages/Project 6.jpg";

function Projects() {
  const projects = [
    {
      name: "Bank App",
      image: Project1Image,
      githubLink: "https://github.com/siwinile/BankingApp",
      liveDemoLink: "https://example.com/financial-calculator"
    },
    {
      name: "Metric Conveter",
      image: Project2Image,
      githubLink: "https://github.com/siwinile/java-metric-converter",
      liveDemoLink: "https://example.com/project-2"
    },
    {
      name: "tax Calculator",
      image: Project3Image,
      githubLink: "https://github.com/siwinile/tax-calculator",
      liveDemoLink: "https://example.com/project-3"
    },
    {
      name: "Website",
      image: Project4Image,
      githubLink: "https://github.com/siwinile/HTML-CSS-and-JS-Website",
      liveDemoLink: "https://rainbow-fudge-46fcab.netlify.app/#"
    },
    {
      name: "Financial Calculator",
      image: Project5Image,
      githubLink: "https://github.com/financial-calculator",
      liveDemoLink: "https://example.com/project-5"
    },
    {
      name: "Commobidity App and website",
      image: Project6Image,
      githubLink: "https://sites.google.com/view/online-appointment/home",
      liveDemoLink: "https://sites.google.com/view/online-appointment/home"
    }
  ];

  const [currentProject, setCurrentProject] = useState(0); // State to track current project index

  const goToNextProject = () => {
    setCurrentProject(currentProject === projects.length - 1 ? 0 : currentProject + 1);
  };

  const goToPrevProject = () => {
    setCurrentProject(currentProject === 0 ? projects.length - 1 : currentProject - 1);
  };

  return (
    <section id="projects">
      <p className="section__text__p1">Browse My Recent</p>
      <h1 className="title">Projects</h1>
      <div className="experience-details-container">
        <div className="about-containers">
          <div className="details-container color-container">
            <div className="article-container">
              <img
                src={projects[currentProject].image}
                alt={projects[currentProject].name}
                className="project-img"
              />
            </div>
            <h2 className="experience-sub-title project-title">{projects[currentProject].name}</h2>
            <div className="btn-container">
              <button
                className="btn btn-color-2 project-btn"
                onClick={goToPrevProject}
              >
                Previous
              </button>
              <a
                className="btn btn-color-2 project-btn"
                href={projects[currentProject].githubLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
              <a
                className="btn btn-color-2 project-btn"
                href={projects[currentProject].liveDemoLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                Live Demo
              </a>
              <button
                className="btn btn-color-2 project-btn"
                onClick={goToNextProject}
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
      <img
        src="./assets/arrow.png"
        alt="Arrow icon"
        className="icon arrow"
        onClick={() => window.location.href = './#contact'}
      />
    </section>
  );
}

export default Projects;
