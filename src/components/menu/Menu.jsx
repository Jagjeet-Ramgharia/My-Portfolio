import React from "react";
import "./menu.scss";

const Menu = ({ menuOpen, setMenuOpen }) => {
  return (
    <div className={"menu " + (menuOpen && "active")}>
      <ul>
        <li className="animate_btn" onClick={() => setMenuOpen(false)}>
          <a href="#intro">Home</a>
        </li>
        <li className="animate_btn" onClick={() => setMenuOpen(false)}>
          <a href="#about">About Me</a>
        </li>
        <li className="animate_btn" onClick={() => setMenuOpen(false)}>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li className="animate_btn" onClick={() => setMenuOpen(false)}>
          <a href="#works">Work</a>
        </li>
        <li className="animate_btn" onClick={() => setMenuOpen(false)}>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
