"use client";

import React from "react";
import Slider from "react-slick";
import Slide from "./Slide";

const Hero = () => {
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    pauseOnHover: false,
  };

  const slideData = [
    {
      id: 0,
      img: "/banner-1.jpg",
      title: "Craft Your Success",
      mainTitle: "Start Quality Stationery",
      price: "standard quality",
    },
    {
      id: 1,
      img: "/banner-2.jpg",
      title: "Unleash your potential",
      mainTitle: "Premium Stationery picks",
      price: "standard quality",
    },
    {
      id: 2,
      img: "/banner-3.jpg",
      title: "Write your legancy",
      mainTitle: "Our Stationary, Your Story",
      price: "standard quality",
    },
  ];

  return (
    <div>
      <div className="container pt-6 lg:pt-0">
        <Slider {...settings}>
          {slideData.map((item) => (
            <Slide
              key={item.id}
              img={item.img}
              title={item.title}
              mainTitle={item.mainTitle}
              price={item.price}
            />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Hero;
