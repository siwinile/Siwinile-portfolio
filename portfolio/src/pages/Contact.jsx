import React, { useState } from 'react'
import { ToastContainer, toast } from "react-toastify";
import "../style/Contact.css";

export default function ContactMe() {
  
  const [user, setUser] = useState(
    {
      FullName: '', Subject: '', Email:'', Message:''
    }
)

console.log(user)
let name, value
const data = (e) => {
    name = e.target.name;
    value = e.target.value;
    setUser({...user, [name]: value});
}
//post method for sending data to the realtime database
const getData = async (e) => {
    const {FullName, Subject, Email, Message} = user;
    e.preventDefault();
    const options = {
        method: 'POST',
        Headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            FullName, Subject, Email, Message
        })
    }

    const res = await fetch('https://eucharistar-default-rtdb.firebaseio.com/UserData.json',
        options
    )
    console.log(res)
    if (res){
        alert('Message sent successfully!')
    }else{
        alert('Error Occured')
    }
}

    return (
      <section id="Contact" className="contact--section" onSubmit={getData}>
        <div>
          {/* <p className="sub--title">Get In Touch</p> */}
          <h2>Contact Me</h2>
          <p className="text-lg">
            If you have any questions or just want to say hi, please feel free to
          </p>
        </div>
        <form className="contact--form--container">
          <div className="container">
            <label htmlFor="first-name" className="contact--label">
              <span className="text-md">First Name</span>
              <input
                type="text"
                className="contact--input text-md"
                name="FullName"
                value={user.FullName}
                onChange={data}
                id="first-name"
                required
              />
            </label>
            <label htmlFor="last-name" className="contact--label">
              <span className="text-md">Subject</span>
              <input
                type="text"
                className="contact--input text-md"
                name="Subject"
                value={user.Subject}
                onChange={data}
                id="last-name"
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
            />
          </label>
          <label htmlFor="checkboc" className="checkbox--label">
            <input type="checkbox" required name="checkbox" id="checkbox" />
            <span className="text-sm">I accept the terms</span>
          </label>
          <div>
            <button className="btn btn-primary contact--form--btn">Submit</button>
          </div>
        </form>
      </section>
    );
  }









