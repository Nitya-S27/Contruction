import React from "react";
import "./Testimonials.scss";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In a metus pellentesque, scelerisque ex sed, volutpat nisi. Curabitur tortor mi, eleifend ornare lobortis non. Nulla porta purus quis iaculis ultrices. Proin aliquam sem at nibh hendrerit sagittis. Nullam ornare odio eu lacus tincidunt malesuada. Sed eu vestibulum elit. Curabitur tortor mi, eleifend ornare.",
      imgSrc: "assets/testimonial1.jpg",
      name: "GEORGE SLOWS",
      designation: "Builder Manager",
    },
    {
      id: 2,
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In a metus pellentesque, scelerisque ex sed, volutpat nisi. Curabitur tortor mi, eleifend ornare lobortis non. Nulla porta purus quis iaculis ultrices. Proin aliquam sem at nibh hendrerit sagittis. Nullam ornare odio eu lacus tincidunt malesuada. Sed eu vestibulum elit. Curabitur tortor mi, eleifend ornare.",
      imgSrc: "assets/testimonial2.jpg",
      name: "GEORGE SLOWS",
      designation: "Builder Manager",
    },
    {
      id: 3,
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In a metus pellentesque, scelerisque ex sed, volutpat nisi. Curabitur tortor mi, eleifend ornare lobortis non. Nulla porta purus quis iaculis ultrices. Proin aliquam sem at nibh hendrerit sagittis. Nullam ornare odio eu lacus tincidunt malesuada. Sed eu vestibulum elit. Curabitur tortor mi, eleifend ornare.",
      imgSrc: "assets/testimonial3.jpg",
      name: "GEORGE SLOWS",
      designation: "Builder Manager",
    },
    {
      id: 4,
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In a metus pellentesque, scelerisque ex sed, volutpat nisi. Curabitur tortor mi, eleifend ornare lobortis non. Nulla porta purus quis iaculis ultrices. Proin aliquam sem at nibh hendrerit sagittis. Nullam ornare odio eu lacus tincidunt malesuada. Sed eu vestibulum elit. Curabitur tortor mi, eleifend ornare.",
      imgSrc: "assets/testimonial1.jpg",
      name: "GEORGE SLOWS",
      designation: "Builder Manager",
    },
    {
      id: 5,
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In a metus pellentesque, scelerisque ex sed, volutpat nisi. Curabitur tortor mi, eleifend ornare lobortis non. Nulla porta purus quis iaculis ultrices. Proin aliquam sem at nibh hendrerit sagittis. Nullam ornare odio eu lacus tincidunt malesuada. Sed eu vestibulum elit. Curabitur tortor mi, eleifend ornare.",
      imgSrc: "assets/testimonial2.jpg",
      name: "GEORGE SLOWS",
      designation: "Builder Manager",
    },
  ];

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div className="testimonials" id="testimonials">
      <h1>WHAT OTHER SAY ABOUT US</h1>
      <div className="border-div"></div>
      <p className="testimonial__para">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Sed sit amet sapien
        sit amet odio lobortis ullamcorper quis vel nisl. Nam blandit maximus
        tristique. Vivamus enim quam, tincidunt vel blandit eu, molestie eget.
      </p>

      <Carousel
        className="testimonial-carousel"
        showDots={true}
        removeArrowOnDeviceType={["tablet", "mobile"]}
        responsive={responsive}
      >
        {testimonials.map((testimonial) => (
          <div key={testimonial.id}>
            <div className="testimonial__content" key={testimonial.id}>
              <img src={testimonial.imgSrc} alt="test__image" />
              <p>{testimonial.content}</p>
            </div>
            <div className="testimonial__owner">
              <h2>{testimonial.name}</h2>
              <p>{testimonial.designation}</p>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Testimonials;
