import React from "react";
import { Link } from "react-router-dom";
import WorkImageOverlay from "./elements/WorkImageOverlay";
import "./Folio.scss";
import { works } from "./FolioWorkData";
const Folio = () => {
  return (
    <div className="folio_wrapper" id="folio">
      <h1>OUR WORKS</h1>
      <div className="border-div"></div>
      <p className="folio__para">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Sed sit amet sapien
        sit amet odio lobortis ullamcorper quis vel nisl. Nam blandit maximus
        tristique. Vivamus enim quam, tincidunt vel blandit eu, molestie eget.
      </p>

      <div className="worksDiv">
        {works.map((work) => (
          <div className="work" key={work.id}>
            <Link to={`/works?workId=${work.id}`}>
              <img
                className="workImage"
                src={work.image}
                alt={work.overlayTitle}
              />
              <WorkImageOverlay work={work} />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Folio;
