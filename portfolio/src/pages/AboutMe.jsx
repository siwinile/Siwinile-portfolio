import AboutImage from "../images/heroimage.png";
import "../style/AboutMe.css";

export default function AboutMe() {
  return (
    <section id="AboutMe" className="about--section">
      
      <div className="about--section--img">
      
      <img src={AboutImage} alt="About Section" className="about--section--img" />
//         </div>

      <div class="flip-card">
    <div class="flip-card-inner">
        <div class="flip-card-front">
            <p class="title">About Me</p>
            <p> Hi, I am Siwinile Mdani. I have completed a National Diploma in Information Technology specializing in software development. I am a patient and hardworking individual with a deep passion for developing software, and I have realized that my passion in the field of technology lies in software development</p>
        </div>
        <div class="flip-card-back">
            <p class="title">Interests</p>
            <p>In addition to technology, I find immense joy in crafting stories that captivate and inspire readers. When I'm not immersed in writing, I'm dedicated to self-development, whether it's through reading books on personal growth, attending workshops, or practicing mindfulness and meditatione</p>
        </div>
    </div>
</div>

    </section>
  );
}









 
