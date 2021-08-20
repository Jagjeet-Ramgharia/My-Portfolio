import React from "react";
import "./testimonial.scss";
import PhoneAndroid from "@material-ui/icons/PhoneAndroid";
const Testimonial = () => {
  const data = [
    {
      id: 1,
      name: "Jagjeet Ramgharia",
      icon: <PhoneAndroid />,
      title: "Junior Developer",
      desc: "elit Numquam reiciendis quo beatae ipsum, architecto ullam.",
      img: "assets/1.png",
      featured: false,
    },
    {
      id: 2,
      icon: <PhoneAndroid />,
      name: "Jagjeet Ramgharia",
      title: "Mobile Desing",
      desc: "elit Numquam reiciendis quo beatae ipsum, architecto ullam.",
      img: "assets/1.png",
      featured: true,
    },
    {
      id: 3,
      icon: <PhoneAndroid />,
      name: "Jagjeet Ramgharia",
      title: "Desing",
      desc: "elit Numquam reiciendis quo beatae ipsum, architecto ullam.",
      img: "assets/1.png",
      featured: false,
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
