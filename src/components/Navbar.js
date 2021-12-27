import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import "./Navbar.scss";
import NavbarLinks from "./elements/NavbarLinks";
import Sidebar from "./elements/Sidebar";
const Navbar = () => {
  const [sidebarOpen, setSidebarOpen] = React.useState(false);
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
          onClick={() => setSidebarOpen(!sidebarOpen)}
        />
        {/* <NavbarLinks /> */}
      </div>
      <Sidebar open={sidebarOpen} set={setSidebarOpen} />
    </div>
  );
};

export default Navbar;
