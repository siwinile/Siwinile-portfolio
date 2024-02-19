import React from 'react';
import "../style/SkillSection.css";

function Canvas() {
  return (
    <section id="Canvas" className="canvas--section">
    <div className="canvas"> 
      <div className="canvas__content">
        <div className="canvas__section">
          <h2>Front-end development</h2>
          <p>
            My canvas in the world of web development is HTML and CSS. I create clear, semantic HTML structures and give them a modern, responsive style makeover.
          </p>
          <p>
            JavaScript is the foundation of my work. I use JavaScript to create user-friendly and entertaining online applications.
          </p>
          <h2>Back-end development</h2>
          <p>
            Java is my dependable travel partner when I venture to the server-side. In order to make sure that the logic behind my applications is just as solid as the user interface, Python empowers me to solve complex problems with simplicity.
          </p>
        </div>
        <div className="canvas__section">
          <h2>Skills</h2>
          <ul>
            <li>HTML</li>
            <div className="progress-bar">
              <div className="progress" style={{ width: "60%" }}>80%</div>
            </div>
            <li>CSS</li>
            <div className="progress-bar">
              <div className="progress" style={{ width: "70%" }}>90%</div>
            </div>
            <li>JavaScript</li>
            <div className="progress-bar">
              <div className="progress" style={{ width: "80%" }}>60%</div>
            </div>
            <li>Python</li>
            <div className="progress-bar">
              <div className="progress" style={{ width: "75%" }}>75%</div>
            </div>
            <li>Java</li>
            <div className="progress-bar">
              <div className="progress" style={{ width: "65%" }}>65%</div>
            </div>
          </ul>
        </div>
      </div>
    </div>
    </section>
  );
}

export default Canvas;

  