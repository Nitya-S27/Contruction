import React from "react";
import "antd/dist/antd.css";
import "./TeamCarousel.scss";
import { Carousel } from "antd";
import Overlay from "./Overlay";

const TeamCarousel = () => {
  const teamDetails = [
    {
      id: 1,
      image: "assets/1.jpg",
      name: "Sarah Spence",
      designation: "Construction Assistant",
      google: "",
      twitter: "",
      linkedin: "",
    },
    {
      id: 2,
      image: "assets/2.jpg",
      name: "John Halpern Spence",
      designation: "Construction Manager",
      google: "",
      twitter: "",
      linkedin: "",
    },
    {
      id: 3,
      image: "assets/3.jpg",
      name: "Tommy Atkins",
      designation: "Electricians",
      google: "",
      twitter: "",
      linkedin: "",
    },
    {
      id: 4,
      image: "assets/4.jpg",
      name: "Richard Wagnar",
      designation: "Civil Engineer",
      google: "",
      twitter: "",
      linkedin: "",
    },
    {
      id: 5,
      image: "assets/1.jpg",
      name: "John Joe",
      designation: "Junior Architect",
      google: "",
      twitter: "",
      linkedin: "",
    },
    {
      id: 6,
      image: "assets/2.jpg",
      name: "Sarah Spence",
      designation: "Construction Assistant",
      google: "",
      twitter: "",
      linkedin: "",
    },
    {
      id: 7,
      image: "assets/3.jpg",
      name: "John Halpern Spence",
      designation: "Construction Manager",
      google: "",
      twitter: "",
      linkedin: "",
    },
    {
      id: 8,
      image: "assets/4.jpg",
      name: "Tommy Atkins",
      designation: "Electricians",
      google: "",
      twitter: "",
      linkedin: "",
    },
  ];

  const imgStyle = {
    margin: "auto auto 5%",
    float: "right",
    width: "100%",
  };
  const width = window.innerWidth;
  console.log(width);

  return (
    <Carousel autoplay={true}>
      <div className="web-carousel">
        <div className="team-members">
          {teamDetails.map(
            (obj, index) =>
              index < 4 && (
                <div key={obj.id} className="team-contents">
                  <img style={imgStyle} src={obj.image} alt="team" />
                  <p className="team-contents__name">{obj.name}</p>
                  <p className="team-contents__designation">
                    {obj.designation}
                  </p>
                  <Overlay object={obj} />
                </div>
              )
          )}
        </div>
      </div>
      <div className="web-carousel">
        <div className="team-members">
          {teamDetails.map(
            (obj, index) =>
              index >= 4 && (
                <div key={obj.id} className="team-contents">
                  <img style={imgStyle} src={obj.image} alt="team" />
                  <p className="team-contents__name">{obj.name}</p>
                  <p className="team-contents__designation">
                    {obj.designation}
                  </p>
                  <Overlay object={obj} />
                </div>
              )
          )}
        </div>
      </div>
      <div className="web-carousel">
        <div className="team-members">
          {teamDetails.map(
            (obj, index) =>
              index < 4 && (
                <div key={obj.id} className="team-contents">
                  <img style={imgStyle} src={obj.image} alt="team" />
                  <p className="team-contents__name">{obj.name}</p>
                  <p className="team-contents__designation">
                    {obj.designation}
                  </p>
                  <Overlay object={obj} />
                </div>
              )
          )}
        </div>
      </div>
    </Carousel>
  );
};
export default TeamCarousel;
