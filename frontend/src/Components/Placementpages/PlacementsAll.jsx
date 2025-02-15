import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { placements } from "../../Data/data";

const PlacementsAll = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(placements);
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="bg-black py-10 overflow-hidden lg:px-30">
      <div className="text-center px-2 md:px-40">
        <h2 className="text-hoverc text-5xl pb-2 font-semibold">PLACEMENTS</h2>
      </div>
      <div className="mt-5 px-2 ">
        <Slider {...settings}>
          {data.map((value, index) => (
            <div key={index} className="flex justify-center">
              <img
                src={value.image}
                alt="placements"
                className="w-full mx-auto"
              />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default PlacementsAll;
