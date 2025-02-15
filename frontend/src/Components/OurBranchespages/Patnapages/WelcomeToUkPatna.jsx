import React from "react";
import Button from "../../../CommonUI/Button";
import { IoCallOutline } from "react-icons/io5";
import { aboutusimg2, aboutusimg3 } from "../../../Images/Image";

const WelcomeToUkPatna = () => {
  return (
    <section className="bg-black p-4 lg:p-30">
      <div className="lg:flex items-center justify-around">
        <div>
          <p className="text-white text-[1.1rem] font-bold">About Us</p>

          <div className="">
            <h2 className="text-hoverc text-3xl w-full md:text-justify md:text-4xl pb-2  font-semibold">
              WELCOME TO UK INTERNATIONAL
            </h2>
            <hr className="h-[2px] w-[70%] mb-4 border-none bg-gradient-to-r  from-black via-[#f906a0] to-black" />
          </div>
          <p className="text-white text-[1.1rem] lg:w-[70%] mb-8">
            Welcome to UK International London Beauty School in Patna, Bihar,
            the only place you can trust to have specialized beauty and makeup
            courses tailored to help you establish and elevate your career in
            the beauty industry. Our experts offer the best training including
            beauty makeup, special effects makeup, airbrush makeup, permanent
            makeup, nail art, hair programs, bridal makeup, cosmetology course,
            and more. We are dedicated to transforming aspirants into proficient
            artists. Being a trusted beauty school, we ensure personalized
            instruction and practice to help you gain the skills and confidence
            needed to succeed in the beauty field. Join India’s No. 1 UK
            International London Beauty School in Patna, and start your journey
            to a bright and successful future in beauty.
          </p>
          <Button
            style={`flex items-center hover:bg-hoverc hover:text-white hover:border-hoverc cursor-pointer border-2 px-4 py-3 rounded-[2rem]  text-hoverc`}
            text={"CONTACT NOW"}
            spanvalue={<IoCallOutline className="mx-2 text-2xl" />}
          />
        </div>
        <div className="relative mt-4 md:mt-0">
          <img src={aboutusimg3} alt="aboutus" width={2500} />
          <div className="absolute top-10 border-20 -left-35 border-white">
            <img src={aboutusimg2} alt="aboutus" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WelcomeToUkPatna;
