import React, { useState } from 'react';
import { ToastContainer, toast } from "react-toastify";
import ReCAPTCHA from 'react-google-recaptcha';
import emailjs from 'emailjs-com'; // Import EmailJS
import "../style/Contact.css";

export default function ContactMe() {
  const [user, setUser] = useState({
    FullName: '', Subject: '', Email: '', Message: ''
  });
  const [recaptchaResponse, setRecaptchaResponse] = useState("");

  let name, value;
  const data = (e) => {
    name = e.target.name;
    value = e.target.value;
    setUser({ ...user, [name]: value });
  };

  const handleRecaptchaResponse = (response) => {
    setRecaptchaResponse(response);
  };

  const getData = async (e) => {
    e.preventDefault();
    const { FullName, Subject, Email, Message } = user;

    try {
      await emailjs.send('service_mkt526r', 'template_wrhc5xb', {
        FullName,
        Subject,
        Email,
        Message,
      }, 'cAg2TMa5f1ZJImqdh');

      alert('Message sent successfully!');
    } catch (error) {
      console.error('Error sending email:', error);
      alert('Error Occurred');
    }
  };

  return (
    <section id="Contact" className="contact--section">
      <div>
        <h2>Contact Me</h2>
        <p className="text-lg">
          If you have any questions, please feel free to ask
        </p>
      </div>
      <form className="contact--form--container" onSubmit={getData}>
        {/* Form Inputs */}
        <div className="container">
          <label htmlFor="full-name" className="contact--label">
            <span className="text-md">Full Name</span>
            <input
              type="text"
              className="contact--input text-md"
              name="FullName"
              value={user.FullName}
              onChange={data}
              id="full-name"
              required
            />
          </label>
          <label htmlFor="subject" className="contact--label">
            <span className="text-md">Subject</span>
            <input
              type="text"
              className="contact--input text-md"
              name="Subject"
              value={user.Subject}
              onChange={data}
              id="subject"
              required
            />
          </label>
          <label htmlFor="email" className="contact--label">
            <span className="text-md">Email</span>
            <input
              type="email"
              className="contact--input text-md"
              name="Email"
              value={user.Email}
              onChange={data}
              id="email"
              required
            />
          </label>
        </div>
        <label htmlFor="message" className="contact--label">
          <span className="text-md">Message</span>
          <textarea
            className="contact--input text-md"
            name="Message"
            value={user.Message}
            onChange={data}
            id="message"
            rows="8"
            placeholder="Type your message..."
            required
          />
        </label>
        <label htmlFor="checkbox" className="checkbox--label">
          <input type="checkbox" required name="checkbox" id="checkbox" />
          <span className="text-sm">I accept the terms</span>
        </label>
        {/* reCAPTCHA Component */}
        <ReCAPTCHA
          sitekey="6LdSB4ApAAAAAE-UtCD-wB0gbtNyFrzzpKoX53Iu" // Replace with your site key
          onChange={handleRecaptchaResponse}
        />
        <div>
          <button className="btn btn-primary contact--form--btn">Submit</button>
        </div>
      </form>
    </section>
  );
}
