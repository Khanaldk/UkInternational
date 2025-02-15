import React from "react";
import Slider from "react-slick";
import { blogimg } from "../../Images/Image";
import Button from "../../CommonUI/Button";
import { NavLink } from "react-router-dom";
import { MdArrowBackIosNew } from "react-icons/md";
import { MdArrowForwardIos } from "react-icons/md";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { blogData } from "../../Data/data";

// Slide data
const slides = [
  {
    title: "Celebrations",
    image: blogimg,
    buttonText: "Blog",
    blogTitle: "Modern Trendy Hairstyle for Saree",
    author: "UK International",
    date: "24 Sep 2024",
  },
  {
    title: "Festive Glam",
    image: "/images/blog2.jpg",
    buttonText: "Read More",
    blogTitle: "Elegant Festive Looks for 2024",
    author: "Style Experts",
    date: "15 Oct 2024",
  },
  {
    title: "Beauty Trends",
    image: "/images/blog3.jpg",
    buttonText: "Explore",
    blogTitle: "Top Makeup Trends for This Wedding Season",
    author: "Glam World",
    date: "30 Nov 2024",
  },
];

const PrevArrow = ({ onClick }) => (
  <button
    className="absolute bottom-[-20px] cursor-pointer left-[40%] z-10 text-white hover:text-hoverc"
    onClick={onClick}
  >
    <MdArrowBackIosNew size={20} />
  </button>
);

const NextArrow = ({ onClick }) => (
  <button
    className="absolute bottom-[-20px] cursor-pointer right-[40%] z-10 text-white hover:text-hoverc"
    onClick={onClick}
  >
    <MdArrowForwardIos size={20} />
  </button>
);

const Celebration = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <section className="max-w-sm mx-auto">
      <div className="border border-gray-500 rounded-2xl p-10 mt-8 relative">
        <div className="text-white flex justify-center">
          <div className="space-y-2">
            <h2 className="text-xl">Celebrations</h2>
            <hr className="text-gray-500" />
          </div>
        </div>
        <Slider {...settings}>
          {blogData.map((slide, index) => (
            <div key={index}>
              <div
                className="mt-4 flex rounded-t-lg items-start p-4 text-white"
                style={{
                  backgroundImage: `url(${slide.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundColor: "black",
                  width: "100%",
                  height: "40vh",
                }}
              >
                <Button className="bg-hoverc px-4 py-1 rounded-3xl">
                  {slide.buttonText}
                </Button>
              </div>
              <div className="mt-2">
                <NavLink to={`/blog-description`}>
                  <p className="text-white text-lg hover:text-hoverc">
                    {slide.heading}
                  </p>
                </NavLink>
                <div className="flex items-center space-x-4 mt-1">
                  <NavLink to="">
                    <p className="text-brownc hover:text-hoverc">
                      {slide.username}
                    </p>
                  </NavLink>
                  <span className="text-brownc py-2">{slide.date}</span>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Celebration;
