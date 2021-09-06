import React from "react";
import "./contact.scss";
import emailjs from "emailjs-com";

const Contact = () => {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_5som6sb",
        "template_rr3diyo",
        e.target,
        "user_LAu1aY5XCDRpSbNoVghVf"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }
  return (
    <div className="contact" id="contact">
      <div className="left">
        <img src="assets/shake.jpg" alt="" />
      </div>
      <div className="right">
        <h2>Contact.</h2>
        <form onSubmit={sendEmail}>
          <input type="text" placeholder="Name" name="name" />
          <input type="email" placeholder="Email" name="email" />
          <input type="text" placeholder="Subject" name="subject" />
          <textarea placeholder="Message" name="message" />
          <button type="submit">Send</button>
        </form>
      </div>
      <span className="footer">Jagjeet Ramgharia</span>
    </div>
  );
};

export default Contact;
