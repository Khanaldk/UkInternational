import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Button from "../../CommonUI/Button";
import { placements } from "../../Data/data";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Placements = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(placements);
  }, [placements]);

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "linear",
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="bg-black py-10  overflow-hidden lg:px-30">
      <div className="md:flex justify-between items-center md:px-40 space-x-20 px-4 lg:space-x-0 ">
        <div>
          <h2 className="text-hoverc text-center text-3xl md:text-5xl md:text-justify pb-2 font-semibold">
            PLACEMENTS
          </h2>
          <hr className="h-[2px] md:w-[100%] my-4 border-none bg-gradient-to-r from-black via-[#f906a0] to-black" />
        </div>
        <NavLink to={`/placements`}>
          <Button
            style={`border text-white border-hoverc [letter-spacing:2px] border-transparent py-2 px-8 bg-hoverc font-semibold rounded-xl cursor-pointer hover:bg-gray-800`}
            text={"VIEW MORE"}
          />
        </NavLink>
      </div>

      <div className="mt-5">
        <Slider {...settings}>
          {data.map((value, key) => (
            <div key={key} className="px-2">
              <img
                src={value.image}
                alt="placement"
                className="w-full mx-auto"
              />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Placements;
