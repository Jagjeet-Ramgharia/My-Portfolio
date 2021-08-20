import React from "react";
import "./testimonial.scss";
import PhoneAndroid from "@material-ui/icons/PhoneAndroid";
const Testimonial = () => {
  const data = [
    {
      id: 2,
      icon: <PhoneAndroid />,
      name: "Jagjeet Ramgharia",
      title: "React Js Developer",
      desc: "I am a web developer with enthusiasm and focused on  frontend developer. I am always willing to work outside my comfort zone and give my best. I have a passion for building front-end interfaces of supreme quality. I love javascript ecosystem.",
      img: "assets/1.png",
      featured: true,
    },
  ];

  return (
    <div className="testimonial" id="testimonial">
      <h1>Testimonial</h1>
      <div className="container">
        {data.map((item) => {
          return (
            <>
              <div className={item.featured ? "card featured" : "card"}>
                <div className="top">
                  {/* <ChevronRightIcon className="left" /> */}
                  <img className="user" src={item.img} alt="" />
                  {/* <img className="right" src="" alt="" /> */}
                </div>
                <div className="center">{item.desc}</div>
                <div className="bottom">
                  <h3>{item.name}</h3>
                  <h4>{item.title}</h4>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Testimonial;
