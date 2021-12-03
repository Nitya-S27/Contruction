import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Construction from "./components/Construction";
import About from "./components/About";
import Facilities from "./components/Facilities";
import Stastics from "./components/Stastics";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Construction />
      <About />
      <Stastics />
      <Facilities />
      <Footer />
    </>
  );
}

export default App;
