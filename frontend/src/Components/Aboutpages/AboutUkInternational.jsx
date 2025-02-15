import React from "react";
import Button from "../../CommonUI/Button";
import { NavLink } from "react-router-dom";
import { FaPhoneVolume } from "react-icons/fa6";
import { aboutusimg2, aboutusimg3 } from "../../Images/Image";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";

const AboutUkInternational = () => {
  return (
    <section className="bg-black p-5 lg:p-30">
      <div className="lg:flex justify-around items-center">
        <div>
          <h1 className="text-white w-full text-center md:text-justify text-3xl md:text-5xl pb-2  font-semibold">
            ABOUT <span className="text-hoverc">UK INTERNATIONAL</span>
          </h1>
          <hr className="h-[2px] md:w-[85%]  mt-2 border-none bg-gradient-to-r from-black via-[#f906a0] to-black" />
          <p className="text-white py-4 lg:w-[65%]">
            What sets us apart is our commitment to quality education delivered
            by the industry experts (holding 15-20 years of experience) Our
            state-of-the-art facilities offer students access to the latest
            tools and technologies, mirroring the real-world environment of top
            beauty establishments. With a wide range of courses tailored to
            various skill levels and interests, we cater everyone from beginners
            to advanced practitioners. At the UK International London Beauty
            School, we understand the importance of industry connections. We
            maintain strong partnerships with leading beauty brands and
            professionals, providing our students with invaluable networking
            opportunities and pathways to employment. Our global perspective
            ensures that our students are prepared to succeed anywhere in the
            world, embracing diverse beauty traditions and practices. Join us at
            the UK International London Beauty School, and become an expert in
            the Fashion, Beauty & Wellness industry. Your journey to success and
            excellence starts here - where education meets inspiration.
          </p>
          <div className="text-white md:flex mt-5 items-center  md:space-y-0 space-x-10">
            <NavLink to={`/courses`}>
              {" "}
              <Button
                style={`border border-hoverc [letter-spacing:2px] border-transparent py-4 px-10 bg-hoverc font-semibold rounded-xl cursor-pointer hover:bg-gray-800`}
                text={"DISCOVER MORE"}
              />
            </NavLink>
            <div className="flex items-center space-x-4 mt-4 md:mt-0">
              <FaPhoneVolume className="text-2xl text-hoverc " />
              <div>
                <p>CALL ANYTIME</p>
                <span>+91 8181814007</span>
              </div>
            </div>
          </div>
        </div>
        <div className="relative mt-4">
          <img
            src={aboutusimg3}
            alt="aboutus"
            className="w-full md:w-[2500px] h-auto"
          />
          <div className="absolute top-10 -left-10 mx-6 md:-left-35 border-4 border-white">
            <img src={aboutusimg2} alt="aboutus" className="w-50 md:w-55" />
          </div>
          <div className="flex items-center justify-center space-x-4 md:space-x-8 mt-6 md:mt-12">
            <FaInstagram className="text-white text-[1rem] md:text-[1.2rem]" />
            <FaFacebook className="text-white text-[1rem] md:text-[1.2rem]" />
            <FaYoutube className="text-white text-[1rem] md:text-[1.2rem]" />
            <FaTwitter className="text-white text-[1rem] md:text-[1.2rem]" />
            <FaPinterest className="text-white text-[1rem] md:text-[1.2rem]" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUkInternational;
