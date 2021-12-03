import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Construction from "./components/Construction";
import Footer from "./components/Footer";
import ContactUs from "./components/ContactUs";

function App() {
  return (
    <>
      <Navbar />
      <Construction />
      <ContactUs />
      <Footer />
    </>
  );
}

export default App;
