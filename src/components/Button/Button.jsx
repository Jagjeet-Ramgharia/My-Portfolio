import React from "react";
import "./button.scss";

const Button = ({ text }) => {
  return (
    <button className="button" style={{ outline: "none" }}>
      {text}
    </button>
  );
};

export default Button;
