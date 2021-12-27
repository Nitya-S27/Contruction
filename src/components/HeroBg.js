import React from "react";
import "antd/dist/antd.css";
import "./HeroBg.scss";
import HeroOverlay from "./elements/HeroBgOverlay";
import { Carousel } from "antd";

const HeroBg = () => {
  const images = [
    {
      id: 1,
      src: "assets/A.jpg",
    },
    {
      id: 2,
      src: "assets/B.jpg",
    },
    {
      id: 3,
      src: "assets/C.jpg",
    },
    {
      id: 4,
      src: "assets/D.jpg",
    },
  ];

  return (
    <div className="carousel" id="hero">
      <Carousel autoplay={0.3} effect="fade" dots={false}>
        {images.map((image) => {
          return (
            <div key={image.id}>
              <img src={image.src} alt="images" />
            </div>
          );
        })}
      </Carousel>
      <div className="container-background">
        <HeroOverlay />
      </div>
      <a href="#construction">
        <div className="down-arrow">
          <div id="arrowAnim">
            <div className="arrowSliding">
              <div className="arrow"></div>
            </div>
            <div className="arrowSliding delay1">
              <div className="arrow"></div>
            </div>
            <div className="arrowSliding delay2">
              <div className="arrow"></div>
            </div>
            <div className="arrowSliding delay3">
              <div className="arrow"></div>
            </div>
          </div>
        </div>
      </a>
    </div>
  );
};
export default HeroBg;
