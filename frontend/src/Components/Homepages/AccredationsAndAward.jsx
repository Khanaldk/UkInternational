import React from "react";
import Slider from "react-slick";
import Button from "../../CommonUI/Button";
import { NavLink } from "react-router-dom";
import { award } from "../../Data/data";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const AccredationsAndAward = () => {
  const settings = {
    infinite: true,
    speed: 700,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "linear",
    arrows: false,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 4 } },
      { breakpoint: 768, settings: { slidesToShow: 3 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <section className="bg-black h-full py-10 overflow-hidden lg:px-30">
      <div className="md:flex justify-between items-center px-10 md:px-20 lg:px-40">
        <div>
          <h2 className="text-white text-3xl md:text-4xl lg:text-5xl pb-2 font-semibold">
            ACCREDITATION <span className="text-hoverc">& AWARDS</span>
          </h2>
          <hr className="h-[2px] w-[130%] my-4 border-none bg-gradient-to-r -ml-20 from-black via-[#f906a0] to-black" />
        </div>
        <NavLink to={`/accredation-award`}>
          <Button
            style={`border text-white border-hoverc [letter-spacing:2px] border-transparent py-2 px-8 bg-hoverc font-semibold rounded-xl cursor-pointer hover:bg-gray-800`}
            text={"VIEW MORE"}
          />
        </NavLink>
      </div>

      <div className="w-full mt-5 overflow-hidden">
        <Slider {...settings}>
          {award.map((value, index) => (
            <div key={index} className="px-2">
              <img src={value.image} alt="award" className="w-full mx-auto" />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default AccredationsAndAward;
