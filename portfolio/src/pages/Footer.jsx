import React from 'react';
import '../style/Footer.css'; 

function Footer() {
    return (
        <footer className="footer-distributed">
            <div className="footer-left">
                <h3>Sagar<span>Developer</span></h3>
                <p className="footer-links">
                    <a href="Home">Home</a>
                    |
                    <a href="AboutMe">AboutMe</a>
                    |
                    <a href="skills">Skills</a>
                    |
                    <a href="Testimonials">Testimonials</a>
                    |
                    <a href="Contacts">Contacts</a>
                
                </p>
                
            </div>
            <div className="footer-center">
                
                <div>
                    <i className="fa fa-phone"></i>
                    <p>+27 663102916</p>
                </div>
                <div>
                    <i className="fa fa-envelope"></i>
                    <p><a href="mailto:sagar00001.co@gmail.com">winniexaba17@gmail.com</a></p>
                </div>
            </div>
            <div className="footer-right">
                <div className="footer-icons">
                    <a href="https://www.instagram.com/winnieeuchar/"><i class="fa-brands fa-square-facebook"></i></a>
                    <a href="https://www.facebook.com/umbali.author"><i class="fa-brands fa-instagram"></i></a>
                    <a href="https://www.linkedin.com/in/siwinile-mdani-a78b58253/"><i class="fa-brands fa-linkedin"></i></a>
                    <a href="#"><i className="fa fa-twitter"></i></a>
                    <a href="#"><i className="fa fa-youtube"></i></a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
