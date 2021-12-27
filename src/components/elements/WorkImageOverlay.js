import React from "react";
const WorkImageOverlay = (props) => {
  return (
    <div className="workImageOverlay">
      <div className="content">
        <div className="title">{props.work.overlayTitle}</div>
        {/* <div className="text">{props.work.overlayText}</div> */}
      </div>
    </div>
  );
};

export default WorkImageOverlay;
