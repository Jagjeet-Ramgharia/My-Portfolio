import React from "react";
import "./testimonial.scss";
import PhoneAndroid from "@material-ui/icons/PhoneAndroid";
import LocationOnIcon from "@material-ui/icons/LocationOn";
const Testimonial = () => {
  const data = [
    {
      id: 2,
      icon: <PhoneAndroid />,
      name: "Jagjeet Ramgharia",
      title: "React Js Developer",
      desc: "I am a web developer with enthusiasm and focused on frontend developement. I am always willing to work outside my comfort zone and give my best. I started out as a digital marketer and slowly realized that i have a passion for building front-end interfaces of supreme quality. I love javascript ecosystem. I am passionate about building scalable software, creating effective solutions, and learning every day to grow professionally.My hobbies are hiking and book reading. I love to play cricket ",
      img: "assets/1.png",
      Hobbies: "Hiking Reading Sports",
      location: "Ludhiana Punjab India",
      featured: true,
    },
  ];

  return (
    <div className="testimonial" id="about">
      <h1>About Me</h1>
      <div className="container">
        {data.map((item, index) => {
          return (
            <>
              <div
                key={index}
                className={item.featured ? "card featured" : "card"}
              >
                <div className="top"></div>
                <div className="center">{item.desc}</div>
                <div className="bottom">
                  {/* <h3>{item.name}</h3> */}
                  {/* <h4>{item.title}</h4> */}
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
