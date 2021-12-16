import React from "react";
import "./TeamCarousel.scss";
import Overlay from "./Overlay";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

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
  ];
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <Carousel
      className="team-carousel"
      showDots={true}
      removeArrowOnDeviceType={["tablet", "mobile"]}
      responsive={responsive}
    >
      {teamDetails.map((obj) => (
        <div key={obj.id} className="team-contents">
          <img src={obj.image} alt="team" />
          <p className="team-contents__name">{obj.name}</p>
          <p className="team-contents__designation">{obj.designation}</p>
          <Overlay object={obj} />
        </div>
      ))}
    </Carousel>
  );
};
export default TeamCarousel;
