import React from "react";
import Slider from "react-slick";
import { FaInstagram } from "react-icons/fa";

import {
  makeup1,
  makeup2,
  makeup3,
  makeup4,
  makeup5,
  makeup6,
} from "../../Images/Image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const OurInstagram = () => {
  const makeupImages = [
    { id: 1, image: makeup1 },
    { id: 2, image: makeup2 },
    { id: 3, image: makeup3 },
    { id: 4, image: makeup4 },
    { id: 5, image: makeup5 },
    { id: 6, image: makeup6 },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 1 },
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <section className="bg-black py-10">
      <div className="text-center px-4">
        <h1 className="text-white text-2xl sm:text-3xl lg:text-5xl pb-2 font-semibold">
          FOLLOW ON OUR INSTAGRAM
        </h1>
        <hr className="h-[2px] w-full mt-2 border-none bg-gradient-to-r from-black via-[#f906a0] to-black" />
      </div>
      <div className="mt-5 mx-auto w-[90%]">
        <Slider {...settings}>
          {makeupImages.map((value) => (
            <div key={value.id} className="relative group">
              <img
                src={value.image}
                alt={`Makeup ${value.id}`}
                className="w-full h-auto rounded-md transition duration-300"
              />
              <div className="absolute inset-0 bg-orange-200 bg-opacity-60 opacity-0 group-hover:opacity-70 transition duration-300 flex items-center justify-center rounded-md">
                <FaInstagram
                  size={30}
                  color="white"
                  className="group-hover:scale-110 transition"
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default OurInstagram;
