import "./WorkPage.scss";
import { Link, useSearchParams } from "react-router-dom";
import { works } from "../components/FolioWorkData";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { IconButton } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useEffect } from "react";
const WorkPage = () => {
  let [searchParams, setSearchParams] = useSearchParams();
  //   console.log(searchParams.get("workId"));
  if (1 === 2) {
    setSearchParams();
  }
  const workId = searchParams.get("workId") || "";
  const currentWork = works[workId] || {};
  console.log(currentWork);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="workDataWrapper">
      <Navbar />
      <div className="content">
        <div className="back">
          <Link to="/">
            <IconButton style={{ color: "black" }}>
              <ArrowBackIcon />
            </IconButton>
          </Link>
        </div>
        <div className="image">
          <img src={currentWork.image} alt={currentWork.overlayTitle} />
        </div>
        <div className="details">
          <div className="title">{currentWork.overlayTitle}</div>
          <div className="description">{currentWork.overlayText}</div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default WorkPage;
