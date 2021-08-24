import React from "react";
import "./contact.scss";
import { GitHub, LinkedIn, MailOutline } from "@material-ui/icons";

const Contact = () => {
  return (
    <div className="contact" id="contact">
      <div className="left">
        <img src="assets/shake.jpg" alt="" />
      </div>
      <div className="right">
        <h2>Contact.</h2>

        <div className="item">
          <LinkedIn className="icon" />
          <a
            className="link"
            href="https://www.linkedin.com/in/jagjeet-singh-84a60a171/"
            target="_blank"
          >
            Jagjeet Singh
          </a>
        </div>
        <div className="item">
          <GitHub className="icon" />
          <a className="link" href="https://github.com/Jagjeet-Ramgharia">
            Jagjeet Ramgharia
          </a>
        </div>
        <div className="item">
          <MailOutline className="icon" />
          <span className="link">Ramghariajagjeet4281@gmail.com</span>
        </div>
      </div>
      <span className="footer">Jagjeet Ramgharia</span>
    </div>
  );
};

export default Contact;
