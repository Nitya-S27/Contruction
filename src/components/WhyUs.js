import React from "react";
import "antd/dist/antd.css";
import "./WhyUs.scss";
import { Collapse } from "antd";

const WhyUs = () => {
  const { Panel } = Collapse;

  function callback(key) {
    console.log(key);
  }

  const text = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
  tempor incididunt ut labore et dolore magna aliqua. Sed sit amet sapien
  sit amet odio lobortis ullamcorper quis vel nisl. Nam blandit maximus
  tristique. Vivamus enim quam, tincidunt vel blandit eu, molestie eget.`;
  return (
    <div className="wrapper-why-us" id="whyus">
      <div className="why-us">
        <h1>WHY CHOOSE US?</h1>
        <div className="border-div"></div>
      </div>
      <Collapse
        className="collapse"
        defaultActiveKey={["2"]}
        onChange={callback}
      >
        <Panel
          className="pannel"
          header="Employees have many years of experience"
          key="1"
        >
          <p>{text}</p>
        </Panel>
        <Panel
          className="pannel"
          header="Quality construction continues after the project"
          key="2"
        >
          <p>{text}</p>
        </Panel>
        <Panel
          className="pannel"
          header="We use technology to do the job more quickly"
          key="3"
        >
          <p>{text}</p>
        </Panel>
        <Panel
          className="pannel"
          header="Employees are continuously trained on safety issues"
          key="4"
        >
          <p>{text}</p>
        </Panel>
      </Collapse>
    </div>
  );
};
export default WhyUs;
