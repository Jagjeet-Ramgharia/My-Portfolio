import React, { useEffect, useRef } from "react";
import "./intro.scss";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { init } from "ityped";

const Intro = () => {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backSpeed: 80,
      startDelay: 500,
      backDelay: 1000,
      strings: [
        "Developer",
        "Designer",
        "MERN Stack Developer",
        "PERN Stack Developer",
      ],
    });
  }, []);
  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src="assets/1.png" alt="" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi There, I'm</h2>
          <h1>Jagjeet Ramgharia</h1>
          <h3>
            A <span ref={textRef}></span>
          </h3>
          <a href="#portfolio">
            <ExpandMoreIcon className="icon" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Intro;
