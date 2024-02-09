import AboutImage from "../images/heroimage.png"
import "../style/AboutMe.css"
export default function AboutMe() {
    return (
      <section id="AboutMe" className="about--section">
        <div className="about--section--img">
        <img src={AboutImage} alt="About Section" />
        </div>
        <div className="hero--section--content--box about--section--box">
          <div className="hero--section--content">
            <p className="section--title">About</p>
            <h1 className="skills-section--heading">About Me</h1>
            <div className="paragraph-container">
    <p className="hero--section-description1">
        Hi I am Siwinile Mdani I have completed a National Diploma in Information Technology specialising in software development, I am a patient and hard working individual with deep passion for developing softwares and I have realised that my passion in field of Technology lies in software development,Dedicated to completing various projects with unwavering commitment.
    </p>
    <p className="hero--section-description2">
    <h1 className="skills-section--heading">Other interests</h1>
    As an author, I find immense joy in crafting stories that captivate and inspire readers. When I'm not immersed in writing, I'm dedicated to self-development. Whether it's through reading books on personal growth, attending workshops, or practicing mindfulness and meditation, I'm constantly seeking ways to learn and grow as a person. 
    </p>
</div>

          </div>
        </div>
      </section>
    );
  }