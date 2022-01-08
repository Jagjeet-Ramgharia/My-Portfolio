import React, { useEffect, useState } from "react";
import PortfolioList from "../portfoliolist/PortfokioList";
import "./portfolio.scss";
import {
  featuredPortfolio,
  mobilePortfolio,
  webPortfolio,
  designPortfolio,
} from "../../Data";
import Button from "../Button/Button";

const Portfolio = () => {
  const [selected, setSelected] = useState("Featured");
  const [data, setData] = useState([]);
  const list = [
    {
      id: "Featured",
      title: "Featured",
    },
    {
      id: "Mobile",
      title: "Mobile App",
    },
    {
      id: "Web",
      title: "Web App",
    },
    {
      id: "Design",
      title: "Design",
    },
  ];

  useEffect(() => {
    setData(featuredPortfolio);
  }, [selected]);
  return (
    <div className="portfolio" id="portfolio">
      <h1>Featured Projects</h1>
      {/* <ul>
        {list.map((item) => {
          return (
            <>
              <PortfolioList
                title={item.title}
                active={selected === item.id}
                setSelected={setSelected}
                id={item.id}
                key={item.id}
              />
            </>
          );
        })}
      </ul> */}
      <div className="container">
        {data.map((item, index) => {
          console.log(item);
          return (
            <>
              <div className="item">
                <figure className="project-image">
                  <img src={item.Image} />
                </figure>
                <div className="info-container">
                  <h2 className="ptitle">{item.title}</h2>
                  <hr style={{ color: "white", width: "50%", height: "2px" }} />
                  <button className="btn">See Code</button>
                  <h3 className="pSubtitle">TechStack</h3>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexWrap: "wrap",
                    }}
                  >
                    <Button text="React" />
                    <Button text="SCSS" />
                    <Button text="Styled-Components" />
                    <Button text="MongoDb" />
                    <Button text="React" />
                    <Button text="Express" />
                    <Button text="redux" />
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Portfolio;
