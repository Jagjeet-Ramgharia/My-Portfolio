import React, { useState } from "react";
import "./works.scss";
import { ArrowBackIos, LanguageOutlined } from "@material-ui/icons";
const Works = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const data = [
    {
      id: 1,
      icon: <LanguageOutlined />,
      title: "Web Desing",
      desc: "A social Media app based on MERN stack. Code available on github.",
      img: "assets/social.png",
    },
    {
      id: 2,
      icon: <LanguageOutlined />,
      title: "Web Desing",
      desc: "A Movie streaming app based on MERN stack and firebase for storeage. Code on github",
      img: "assets/streamers.png",
    },
    {
      id: 3,
      icon: <LanguageOutlined />,
      title: "Web Desing",
      desc: "Admin Panel based on React Js. Code available on github",
      img: "assets/admin.png",
    },
  ];

  const handleClick = (way) => {
    way === "left"
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
      : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
  };
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
                <div key={item.id} className="item">
                  <div className="left">
                    <div className="leftContainer">
                      <div className="iconContainer">{item.icon}</div>
                      <h2>{item?.title}</h2>
                      <p>{item?.desc}</p>
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
