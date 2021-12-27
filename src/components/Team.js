import React from "react";
import TeamCarousel from "./elements/TeamCarousel";
import "./Team.scss";

const Team = () => {
  return (
    <div className="team" id="ourteam">
      <h1>OUR TEAM</h1>
      <div className="border-div"></div>
      <p className="team__para">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Sed sit amet sapien
        sit amet odio lobortis ullamcorper quis vel nisl. Nam blandit maximus
        tristique. Vivamus enim quam, tincidunt vel blandit eu, molestie eget.
      </p>
      <TeamCarousel />
    </div>
  );
};

export default Team;
