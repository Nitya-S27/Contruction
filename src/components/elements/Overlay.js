import React from "react";
import {
  AiFillTwitterCircle,
  AiFillGooglePlusCircle,
  AiFillLinkedin,
} from "react-icons/ai";
const Overlay = (props) => {
  return (
    <div className="overlay">
      <div className="icons">
        <a href={props.twitter} className="twitter">
          <AiFillTwitterCircle />
        </a>
        <a href={props.google} className="google">
          <AiFillGooglePlusCircle />
        </a>
        <a href={props.linkedin} className="linkedin">
          <AiFillLinkedin />
        </a>
      </div>
    </div>
  );
};

export default Overlay;
