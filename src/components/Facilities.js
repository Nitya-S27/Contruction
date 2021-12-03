import React from "react";
import "./Facilities.scss";
import { FaHardHat, FaPaintRoller } from "react-icons/fa";
import { MdPerson, MdOutlineConstruction } from "react-icons/md";
import { GiLightBulb, GiPencilRuler } from "react-icons/gi";
const Facilities = () => {
  const offeredFacilities = [
    {
      image: <FaHardHat className="offer-img" />,
      description: "CONSTRUCTION",
    },
    {
      image: <FaPaintRoller className="offer-img" />,
      description: "RENOVATION",
    },
    {
      image: <MdPerson className="offer-img" />,
      description: "CONSULTING",
    },
    {
      image: <MdOutlineConstruction className="offer-img" />,
      description: "CONSTRUCT",
    },
    {
      image: <GiPencilRuler className="offer-img" />,
      description: "ARCHITECTURE",
    },
    {
      image: <GiLightBulb className="offer-img" />,
      description: "ELECTRICAL",
    },
  ];
  return (
    <div className="facilities">
      <h1>WHAT WE OFFER</h1>
      <div className="border-div"></div>
      <p className="facility__para">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Sed sit amet sapien
        sit amet odio lobortis ullamcorper quis vel nisl. Nam blandit maximus
        tristique. Vivamus enim quam, tincidunt vel blandit eu, molestie eget.
      </p>
      <div className="facility__overview">
        {offeredFacilities.map((offers) => (
          <div className="offers">
            <div className="offer-img-div">{offers.image}</div>
            <a href="#" className="offer-des">
              {offers.description}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Facilities;
