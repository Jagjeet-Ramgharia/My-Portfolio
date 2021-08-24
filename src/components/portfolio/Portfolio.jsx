import React, { useEffect, useState } from "react";
import PortfolioList from "../portfoliolist/PortfokioList";
import "./portfolio.scss";
import {
  featuredPortfolio,
  mobilePortfolio,
  webPortfolio,
  designPortfolio,
} from "../../Data";

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
    switch (selected) {
      case "Featured":
        setData(featuredPortfolio);
        break;
      case "Mobile":
        setData(mobilePortfolio);
        break;
      case "Web":
        setData(webPortfolio);
        break;
      case "Design":
        setData(designPortfolio);
        break;
      default:
        setData(featuredPortfolio);
    }
  }, [selected]);
  return (
    <div className="portfolio" id="portfolio">
      <h1>Portfolio</h1>
      <ul>
        {list.map((item) => {
          return (
            <>
              <PortfolioList
                title={item.title}
                active={selected === item.id}
                setSelected={setSelected}
                id={item.id}
              />
            </>
          );
        })}
      </ul>
      <div className="container">
        {data.map((item, index) => {
          return (
            <>
              <div className="item">
                <img src={item.Image} alt="" />
                <h3>{item.title}</h3>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Portfolio;
