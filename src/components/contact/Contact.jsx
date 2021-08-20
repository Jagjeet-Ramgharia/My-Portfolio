import React, { useState } from "react";
import "./contact.scss";

const Contact = () => {
  const [message, setMessage] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(true);
  };

  return (
    <div className="contact" id="contact">
      <div className="left">
        <img src="assets/shake.jpg" alt="" />
      </div>
      <div className="right">
        <h2>Contact.</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Email" />
          <textarea placeholder="Message"></textarea>
          <button type="submit">Send Message</button>
          {message && <span>Thanks, I'll replay ASAP</span>}
        </form>
      </div>
      <span className="email">Email : ramghariajagjeet4281@gmail.com</span>
    </div>
  );
};

export default Contact;
