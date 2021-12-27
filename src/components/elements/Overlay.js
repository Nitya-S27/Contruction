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
        <a href={props.object.twitter} className="twitter">
          <AiFillTwitterCircle />
        </a>
        <a href={props.object.google} className="google">
          <AiFillGooglePlusCircle />
        </a>
        <a href={props.object.linkedin} className="linkedin">
          <AiFillLinkedin />
        </a>
      </div>
    </div>
  );
};

export default Overlay;
