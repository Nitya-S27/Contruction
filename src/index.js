import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App";
import WorkPage from "./containers/WorkPage";

ReactDOM.render(
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      {/* <Route path="/works/*" element={<WorkPage />} /> */}
      <Route path=":workId" element={<WorkPage />} />
    </Routes>
  </Router>,
  document.getElementById("root")
);
