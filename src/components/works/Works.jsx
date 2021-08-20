import React, { useState } from "react";
import "./works.scss";
import { PhoneAndroid, ArrowBackIos } from "@material-ui/icons";
const Works = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const data = [
    {
      id: 1,
      icon: <PhoneAndroid />,
      title: "Web Desing",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit Numquam reiciendis quo beatae ipsum, architecto ullam.",
      img: "assets/webdev.png",
    },
    {
      id: 2,
      icon: <PhoneAndroid />,
      title: "Mobile Desing",
      desc: " ipsum dolor sit amet consectetur adipisicing elit Numquam reiciendis quo beatae ipsum, architecto ullam.",
      img: "assets/webdev.png",
    },
    {
      id: 3,
      icon: <PhoneAndroid />,
      title: "Desing",
      desc: "dolor sit amet consectetur adipisicing elit Numquam reiciendis quo beatae ipsum, architecto ullam kuchbhi.",
      img: "assets/webdev.png",
    },
  ];
  // console.log(data);

  const handleClick = (way) => {
    way === "left"
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
      : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
  };
  console.log(currentSlide);
  return (
    <div className="works" id="works">
      <div
        className="slider"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        {data?.map((item) => {
          return (
            <>
              <div className="container">
                <div className="item">
                  <div className="left">
                    <div className="leftContainer">
                      <div className="iconContainer">{item.icon}</div>
                      <h2>{item?.title}</h2>
                      <p>{item?.desc}</p>
                      <span>Projects</span>
                    </div>
                  </div>
                  <div className="right">
                    <img src={item?.img} alt="" />
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </div>
      <ArrowBackIos
        className="arrow left"
        onClick={() => handleClick("left")}
      />
      <ArrowBackIos className="arrow right" onClick={() => handleClick()} />
    </div>
  );
};

export default Works;
