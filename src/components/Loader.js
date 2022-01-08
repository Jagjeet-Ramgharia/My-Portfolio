import React, { useEffect, useRef } from "react";
import anime from "animejs";
import "./loader.css";

function Loader() {
  let animateRef = useRef();

  useEffect(() => {
    function animateBlocks() {
      animateRef = anime({
        targets: ".block",
        translateX: function () {
          return anime.random(-700, 700);
        },
        translateY: function () {
          return anime.random(-600, 600);
        },
        scale: function () {
          return anime.random(1, 5);
        },
        easing: "linear",
        duration: 2000,
        delay: anime.stagger(10),
        complete: animateBlocks,
      });
    }
    animateBlocks();
  }, []);
  return (
    <div className="conatiner">
      <div className="block" ref={animateRef}>
        <img src="./assets/img/react.ico" alt="" />
      </div>
      <div className="block" ref={animateRef}>
        <img src="./assets/img/css.png" alt="" />
      </div>
      <div className="block" ref={animateRef}>
        <img src="./assets/img/figma.png" alt="" />
      </div>
      <div className="block" ref={animateRef}>
        <img src="./assets/img/github.png" alt="" />
      </div>
      <div className="block" ref={animateRef}>
        <img src="./assets/img/html.png" alt="" />
      </div>
      <div className="block" ref={animateRef}>
        <img src="./assets/img/js.png" alt="" />
      </div>
      <div className="block" ref={animateRef}>
        <img src="./assets/img/mongo.png" alt="" />
      </div>
      <div className="block" ref={animateRef}>
        <img src="./assets/img/nextjs.png" alt="" />
      </div>
      <div className="block" ref={animateRef}>
        <img src="./assets/img/node.png" alt="" />
      </div>
      <div className="block" ref={animateRef}>
        <img src="./assets/img/redux.png" alt="" />
      </div>
      <div className="block" ref={animateRef}>
        <img src="./assets/img/bootstrap.png" alt="" />
      </div>
      <div className="block" ref={animateRef}>
        <img src="./assets/img/ps.png" alt="" />
      </div>
    </div>
  );
}

export default Loader;
