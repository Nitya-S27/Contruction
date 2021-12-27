import React from "react";
import "./NavbarLinks.scss";
const NavbarLinks = () => {
  return (
    <div className="nav-links">
      <ul className="nav-links__ul">
        <li>
          <a href="/#construction">Construction</a>
        </li>
        <li>
          <a href="/#aboutus">About Us</a>
        </li>
        <li>
          <a href="/#facilities">Services</a>
        </li>
        <li>
          <a href="/#testimonials">Testimonials</a>
        </li>
        <li>
          <a href="/#ourteam">Our Team</a>
        </li>
        <li>
          <a href="/#contactus">Contact Us</a>
        </li>
      </ul>
    </div>
  );
};

export default NavbarLinks;
