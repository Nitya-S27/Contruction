import React from "react";
import "./Facilities.scss";
import { FaHardHat, FaPaintRoller } from "react-icons/fa";
import { MdPerson, MdOutlineConstruction } from "react-icons/md";
import { GiLightBulb, GiPencilRuler } from "react-icons/gi";
const Facilities = () => {
  const offeredFacilities = [
    {
      id: "1",
      image: <FaHardHat className="offer-img" />,
      description: "CONSTRUCTION",
    },
    {
      id: "2",
      image: <FaPaintRoller className="offer-img" />,
      description: "RENOVATION",
    },
    {
      id: "3",
      image: <MdPerson className="offer-img" />,
      description: "CONSULTING",
    },
    {
      id: "4",
      image: <MdOutlineConstruction className="offer-img" />,
      description: "CONSTRUCT",
    },
    {
      id: "5",
      image: <GiPencilRuler className="offer-img" />,
      description: "ARCHITECTURE",
    },
    {
      id: "6",
      image: <GiLightBulb className="offer-img" />,
      description: "ELECTRICAL",
    },
  ];
  return (
    <div className="facilities" id="facilities">
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
          <div key={offers.id} className="offers">
            <div className="offer-img-div">{offers.image}</div>
            <p className="offer-des">{offers.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Facilities;
