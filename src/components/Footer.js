import "./Footer.scss";
import { FaTwitter } from "react-icons/fa";
import { IoLogoGoogleplus } from "react-icons/io";
import { BiBasketball } from "react-icons/bi";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

const Footer = () => {
  const footerIconsData = [
    {
      name: "twitter",
      link: "https://www.twitter.com",
      icon: <FaTwitter className="icon-image" />,
    },
    {
      name: "google",
      link: "https://www.gmail.com",
      icon: <IoLogoGoogleplus className="icon-image" />,
    },
    {
      name: "web",
      link: "https://www.twitter.com",
      icon: <BiBasketball className="icon-image" />,
    },
    {
      name: "instagram",
      link: "https://www.instagram.com",
      icon: <FaInstagram className="icon-image" />,
    },
    {
      name: "github",
      link: "https://www.github.com",
      icon: <FaGithub className="icon-image" />,
    },
    {
      name: "facebook",
      link: "https://www.facebook.com",
      icon: <FaFacebook className="icon-image" />,
    },
  ];
  return (
    <div className="footer-wrapper">
      <div className="footer-up">
        <div className="icons-div">
          {footerIconsData.map((icon) => (
            <div
              key={icon.name}
              className="icon-box"
              onClick={() => window.open(icon.link)}
            >
              {icon.icon}
            </div>
          ))}
        </div>
        <div className="logo-div">
          <img
            className="logo-img"
            src="assets/navbar-brand-white.png"
            alt="logopic"
          />
          <div className="logo-text">CONSTRUCTION</div>
        </div>
        <div className="secondary-text">
          Class aptent taciti sociosqu ad litora torquent per conubia nostra,
          per inceptos himenaeos. Quisque finibus volutpat dui eu posuere lacus
          elementum eget. Sed egestas metus a nisi vestibulum sodales.
        </div>
      </div>
      <div className="footer-down"></div>
    </div>
  );
};

export default Footer;
