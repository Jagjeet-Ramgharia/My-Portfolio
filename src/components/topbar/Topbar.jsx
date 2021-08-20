import React from "react";
import "./topbar.scss";
import { Person, MailOutline } from "@material-ui/icons";

const Topbar = ({ menuOpen, setMenuOpen }) => {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            Jagjeet-Ramgharia
          </a>
          <div className="itemContainer">
            <Person className="icon" />
            <span>+916283818230</span>
          </div>
          <div className="itemContainer">
            <MailOutline className="icon" />
            <span>Ramghariajagjeet4281@gmail.com</span>
          </div>
        </div>
        <div className="right">
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
