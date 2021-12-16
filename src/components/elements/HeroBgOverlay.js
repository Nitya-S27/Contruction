import React from "react";
import "./HeroBgOverlay.scss";
import "antd/dist/antd.css";
import { Carousel } from "antd";
import { BsArrowRightCircleFill } from "react-icons/bs";

const HeroOverlay = () => {
  const statements = [
    {
      id: 1,
      des: "WE ARE BUILDERS.",
    },
    {
      id: 2,
      des: "BUILDING IS OUR PASSION.",
    },
    {
      id: 3,
      des: "WE ARE CONSTRUCTION.",
    },
    {
      id: 4,
      des: "DESIGN AND BUILD.",
    },
  ];

  return (
    <div className="overlay-hero">
      <Carousel autoplay={0.3} effect="fade" dots={false}>
        {statements.map((description) => {
          return <h1 key={description.id}>{description.des}</h1>;
        })}
      </Carousel>
      <button className="button-1" type="submit">
        Learn More
      </button>
      <a href="#" target="_blank">
        <button className="button-2" type="submit">
          Our Folio <BsArrowRightCircleFill className="arrow" />
        </button>
      </a>
    </div>
  );
};
export default HeroOverlay;
