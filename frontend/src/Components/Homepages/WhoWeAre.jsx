import React from "react";
import Button from "../../CommonUI/Button";
import { makeup } from "../../Images/Image";
import { NavLink } from "react-router-dom";
const WhoWeAre = () => {
  return (
    <section className=" bg-black  lg:flex items-center justify-around p-4  lg:py-30 lg:px-40  ">
      <div>
        <h1 className="text-white text-3xl md:text-5xl w-full md:w-full pb-2 text-center md:text-justify font-semibold">
          WHO <span className="text-hoverc">WE ARE</span>
        </h1>
        <hr className="h-[2px] md:-ml-20 mt-2 w-[100%] border-none bg-gradient-to-r from-black via-[#f906a0] to-black" />

        <p className="text-white  md:w-[80%] py-6 ">
          UK International, one of the top makeup academy and beauty school, is
          where your journey towards a successful beauty career begins. Our
          Beauty School is known to offer the best education and professional
          training across a variety of beauty disciplines.
        </p>
        <p className="text-white md:w-[81.5%] mb-8">
          Whether you are interested in learning cosmetology, the art of makeup,
          hairdressing, nail art, or more, our programs are designed to teach
          you top-notch knowledge that helps you excel in the beauty industry.
          The cosmetology program we offer is an exploration of beauty
          techniques. From advanced skincare and makeup applications to hair
          cutting and styling, we have everything that will ensure you a secured
          career.{" "}
        </p>
        <NavLink to={`/about`}>
          {" "}
          <Button
            style={`border text-white border-hoverc  [letter-spacing:2px] border-transparent py-4 px-12 bg-hoverc font-semibold rounded-xl cursor-pointer hover:bg-gray-800`}
            text={"READ MORE"}
          />
        </NavLink>
      </div>
      <div className="pt-4">
        <img src={makeup} alt="makeup" width={2100} />
      </div>
    </section>
  );
};

export default WhoWeAre;
