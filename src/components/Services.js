import React from "react";
import "./Services.scss";
import { GiDrill, GiPaintRoller, GiTap } from "react-icons/gi";
import { MdRoofing } from "react-icons/md";

const Services = () => {
  const services = [
    {
      id: 1,
      image: <GiDrill />,
      serice_heading: "Prepair Services",
      service_des:
        "Vestibulum eu libero volutpat, portas quam, tempus sem. Donec sodales quam id lorem lobortis, vitae interdum nisl.",
    },
    {
      id: 2,
      image: <GiPaintRoller />,
      serice_heading: "Wall Painting",
      service_des:
        "Vestibulum eu libero volutpat, portas quam, tempus sem. Donec sodales quam id lorem lobortis, vitae interdum nisl.",
    },
    {
      id: 3,
      image: <GiTap />,
      serice_heading: "Creative Plumbing",
      service_des:
        "Vestibulum eu libero volutpat, portas quam, tempus sem. Donec sodales quam id lorem lobortis, vitae interdum nisl.",
    },
    {
      id: 4,
      image: <MdRoofing />,
      serice_heading: "Metal Roofing",
      service_des:
        "Vestibulum eu libero volutpat, portas quam, tempus sem. Donec sodales quam id lorem lobortis, vitae interdum nisl.",
    },
  ];

  return (
    <div id="services">
      <div className="services__wrapper">
        <div className="services">
          {services.map(
            (service, index) =>
              index < 2 && (
                <div className="services__des" key={service.id}>
                  <div className="services__image">{service.image}</div>
                  <div className="services__info">
                    <a href="/" target="_blank">
                      {service.serice_heading}
                    </a>
                    <p>{service.service_des}</p>
                  </div>
                </div>
              )
          )}
        </div>
        <div className="services">
          {services.map(
            (service, index) =>
              index >= 2 && (
                <div className="services__des" key={service.id}>
                  <div className="services__image">{service.image}</div>
                  <div className="services__info">
                    <a href="/" target="_blank">
                      {service.serice_heading}
                    </a>
                    <p>{service.service_des}</p>
                  </div>
                </div>
              )
          )}
        </div>
        <div className="man">
          <img src="assets/man.png" alt="man" />
        </div>
      </div>
      <div className="quote">
        <p>Contractors & Construction Managers Since 1981</p>
        <button>GET A QUOTE</button>
      </div>
    </div>
  );
};

export default Services;
