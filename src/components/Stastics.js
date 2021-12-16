import React from "react";
import CountUp from "react-countup";
import "./Statistics.scss";

const Stastics = () => {
  return (
    <div className="statistics">
      <div className="stats-data">
        <div className="stats-data__num">
          <CountUp start={0} end={1240} duration={10} />
        </div>
        <div className="stats-data__task">PROJECTS COMPLETED</div>
      </div>
      <div className="stats-data">
        <div className="stats-data__num">
          <CountUp start={0} end={1750} duration={10} />+
        </div>
        <div className="stats-data__task">HAPPY CLIENTS</div>
      </div>
      <div className="stats-data">
        <div className="stats-data__num">
          <CountUp start={0} end={984} duration={10} />
        </div>
        <div className="stats-data__task">WORKERS EMPLOYED</div>
      </div>
      <div className="stats-data">
        <div className="stats-data__num">
          <CountUp start={0} end={96} duration={10} />
        </div>
        <div className="stats-data__task">AWARDS WON</div>
      </div>
    </div>
  );
};

export default Stastics;
