import React, { useState, useEffect } from "react";
import { slide1, slide2, slide3, slide4 } from "../../Images/Image";
import { MdArrowBackIos } from "react-icons/md";
import { MdArrowForwardIos } from "react-icons/md";

const HeroSection = () => {
  const images = [slide1, slide2, slide3, slide4];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  useEffect(() => {
    const interval = setInterval(nextImage, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full mx-auto">
      <div
        className="overflow-hidden relative w-full h-[400px] md:h-[780px]"
        style={{ transition: "transform 0.5s ease-in-out" }}
      >
        <img
          src={images[currentIndex]}
          alt="carousel"
          className="w-full h-full object-cover"
        />
      </div>

      <button
        onClick={prevImage}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 cursor-pointer text-white text-3xl"
      >
        <MdArrowBackIos className=" text-3xl md:text-6xl text-hoverc" />
      </button>
      <button
        onClick={nextImage}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 cursor-pointer text-white text-3xl"
      >
        <MdArrowForwardIos className=" text-3xl md:text-6xl text-hoverc" />
      </button>
    </div>
  );
};

export default HeroSection;
