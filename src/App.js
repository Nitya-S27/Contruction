import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Construction from "./components/Construction";
import About from "./components/About";
import Facilities from "./components/Facilities";
import Stastics from "./components/Stastics";
import Team from "./components/Team";
import Footer from "./components/Footer";
import ContactUs from "./components/ContactUs";

function App() {
  return (
    <>
      <Navbar />
      <Construction />
      <About />
      <Stastics />
      <Facilities />
      <Team />
      <ContactUs />
      <Footer />
    </>
  );
}

export default App;
