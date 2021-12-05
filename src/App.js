import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import HeroBg from "./components/HeroBg";
import Construction from "./components/Construction";
import About from "./components/About";
import Facilities from "./components/Facilities";
import Stastics from "./components/Stastics";
import WhyUs from "./components/WhyUs";
import Team from "./components/Team";
import Footer from "./components/Footer";
import ContactUs from "./components/ContactUs";

function App() {
  return (
    <>
      <Navbar />
      <HeroBg />
      <Construction />
      <About />
      <Stastics />
      <Facilities />
      <WhyUs />
      <Team />
      <ContactUs />
      <Footer />
    </>
  );
}

export default App;
