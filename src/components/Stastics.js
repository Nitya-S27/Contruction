import React from "react";
import "./Statistics.scss";

const Stastics = () => {
  return (
    <div className="statistics">
      <div className="stats-data">
        <div className="stats-data__num">1240</div>
        <div className="stats-data__task">PROJECTS COMPLETED</div>
      </div>
      <div className="stats-data">
        <div className="stats-data__num">1750+</div>
        <div className="stats-data__task">HAPPY CLIENTS</div>
      </div>
      <div className="stats-data">
        <div className="stats-data__num">984</div>
        <div className="stats-data__task">WORKERS EMPLOYED</div>
      </div>
      <div className="stats-data">
        <div className="stats-data__num">96</div>
        <div className="stats-data__task">AWARDS WON</div>
      </div>
    </div>
  );
};

export default Stastics;
