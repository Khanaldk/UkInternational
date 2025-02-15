import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { awarddata } from "../../Data/data";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const OurAward = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    setData(awarddata);
  }, [awarddata]);

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
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <section className="bg-black p-4  lg:py-16 overflow-hidden lg:px-30">
      <div className="text-center">
        <h1 className="text-hoverc text-3xl md:text-5xl pb-2 font-semibold">
          OUR AWARDS
        </h1>
        <hr className="h-[2px] w-[105%] mt-2 border-none bg-gradient-to-r from-black via-[#f906a0] to-black" />
        <p className="text-white text-[1rem] md:text-[1.1rem] mt-2">
          UK INTERNATIONAL LONDON BEAUTY SCHOOL EARNS PRESTIGIOUS ACCREDITATION
          FOR EXCELLENCE IN EDUCATION
        </p>
      </div>
      <div className="mt-12">
        <Slider {...settings}>
          {data.map((value, key) => (
            <div key={key} className="px-4">
              <img src={value.image} alt="award" className="w-full" />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default OurAward;
