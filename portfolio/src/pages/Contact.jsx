import React, { useState } from 'react';
import { ToastContainer, toast } from "react-toastify";
import ReCAPTCHA from 'react-google-recaptcha'; // Import the ReCAPTCHA component
import "../style/Contact.css";

export default function ContactMe() {
  const [user, setUser] = useState({
    FullName: '', Subject: '', Email: '', Message: ''
  });

  const [recaptchaResponse, setRecaptchaResponse] = useState(""); // State to hold the reCAPTCHA response

  let name, value;
  const data = (e) => {
    name = e.target.name;
    value = e.target.value;
    setUser({ ...user, [name]: value });
  };

  const handleRecaptchaResponse = (response) => {
    setRecaptchaResponse(response); // Store the reCAPTCHA response
  };

  const getData = async (e) => {
    e.preventDefault();
    const { FullName, Subject, Email, Message } = user;

    // Include the reCAPTCHA response in your request
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        FullName, Subject, Email, Message, recaptchaResponse // Add reCAPTCHA response here
      })
    };

    const res = await fetch('https://eucharistar-default-rtdb.firebaseio.com/UserData.json', options);
    console.log(res);
    if (res.ok) {
      alert('Message sent successfully!');
    } else {
      alert('Error Occurred');
    }
  };

  return (
    <section id="Contact" className="contact--section" onSubmit={getData}>
      <div>
        <h2>Contact Me</h2>
        <p className="text-lg">
          If you have any questions or just want to say hi, please feel free to
        </p>
      </div>
      <form className="contact--form--container">
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
        <label htmlFor="checkboc" className="checkbox--label">
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








