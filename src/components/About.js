import React from "react";
import "./About.scss";
const About = () => {
  return (
    <div className="about">
      <h1>ABOUT US</h1>
      <div className="border-div"></div>
      <p className="about__para">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Sed sit amet sapien
        sit amet odio lobortis ullamcorper quis vel nisl. Nam blandit maximus
        tristique. Vivamus enim quam, tincidunt vel blandit eu, molestie eget.
      </p>
      <div className="about__img">
        <img src="assets/demo-img2.jpg" alt="demo-img" />
      </div>
    </div>
  );
};
export default About;
