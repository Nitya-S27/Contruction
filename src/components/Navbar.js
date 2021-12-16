import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import "./Navbar.scss";
import NavbarLinks from "./elements/NavbarLinks";
const Navbar = () => {
  // const navbarHandler = () => {
  //   return;
  // };

  return (
    <div>
      <div className="navbar-wrapper-web">
        <div className="navbar-brand">
          <img src="assets/navbar-brand.png" alt="brand-logo" />
          <span>Lorem Ipsum</span>
        </div>
        <NavbarLinks />
      </div>
      <div className="navbar-wrapper-mobile">
        <div className="navbar-brand">
          <img src="assets/navbar-brand.png" alt="brand-logo" />
          <span>Lorem Ipsum</span>
        </div>
        <GiHamburgerMenu
          style={{ marginRight: "2rem" }}
          size="2rem"
          color="#161853"
        />
        {/* <NavbarLinks /> */}
      </div>
    </div>
  );
};

export default Navbar;
