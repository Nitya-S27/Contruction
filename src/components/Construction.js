import React from "react";
import "./Construction.scss";

const Construction = () => {
  return (
    <div id="construction" className="construction">
      <h1>CONSTRUCTION</h1>
      <div className="border-div"></div>
      <p className="construction__para">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Sed sit amet sapien
        sit amet odio lobortis ullamcorper quis vel nisl. Nam blandit maximus
        tristique. Vivamus enim quam, tincidunt vel blandit eu, molestie eget.
      </p>
      <div className="construction__images">
        <div>
          <img src="assets/img1.jpg" alt="random-images" />
          <a href="#">
            <h1>Construction Consultant</h1>
          </a>
          <p className="construction-image__para">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div>
          <img src="assets/img2.jpg" alt="random-images" />
          <a href="#">
            <h1>Resconstruction Services</h1>
          </a>
          <p className="construction-image__para">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div>
          <img src="assets/img3.jpg" alt="random-images" />
          <a href="#">
            <h1>Architectural Design</h1>
          </a>
          <p className="construction-image__para">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </div>
    </div>
  );
};
export default Construction;
