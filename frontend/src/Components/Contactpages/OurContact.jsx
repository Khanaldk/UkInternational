import React from "react";
import { btnimg, contactusimg } from "../../Images/Image";
import Button from "../../CommonUI/Button";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";

const OurContact = () => {
  return (
    <section
      className="bg-center bg-cover bg-no-repeat py-4  lg:py-16"
      style={{
        backgroundImage: `url(${contactusimg})`,
      }}
    >
      <div>
        <div className="grid place-items-center">
          <h2 className="text-white text-5xl pb-2  font-semibold">
            CONTACT <span className="text-hoverc ">US</span>
          </h2>
          <hr className="h-[2px] w-[90%] m-4 border-none bg-gradient-to-r  from-black via-[#f906a0] to-black" />
        </div>

        <div className=" py-8 px-6 lg:px-30">
          <form action="">
            <div className="space-y-4   space-x-4 lg:space-y-0">
              {" "}
              <input
                className="text-hoverc border-hoverc text-[1.2rem] focus:outline-none rounded-lg w-full lg:w-[49%] px-6 py-3 placeholder:text-hoverc border-2 "
                type="text"
                name=""
                id=""
                placeholder="Your Name"
              />
              <input
                className="text-hoverc border-hoverc text-[1.2rem] focus:outline-none rounded-lg w-full lg:w-[49%] px-6 py-3 placeholder:text-hoverc border-2"
                type="email"
                name=""
                id=""
                placeholder="Email Address"
              />
            </div>
            <div className="space-y-4 lg:space-y-0 space-x-6 py-4 lg:py-8">
              <input
                className="text-hoverc border-hoverc text-[1.2rem] focus:outline-none rounded-lg w-full lg:w-[49%] px-6 py-3 placeholder:text-hoverc border-2"
                type="text"
                name=""
                id=""
                placeholder=" Phone"
              />
              <input
                className="text-hoverc border-hoverc text-[1.2rem] focus:outline-none rounded-lg  w-full lg:w-[49%] px-6 py-3 placeholder:text-hoverc border-2"
                type="text"
                name=""
                id=""
                placeholder="Course"
              />
            </div>
            <textarea
              className="text-hoverc border-hoverc text-[1.2rem] focus:outline-none rounded-lg w-full h-36 px-6 py-3 placeholder:text-hoverc border-2 "
              name=""
              id=""
              placeholder="Write Message"
            ></textarea>
            <div className=" mt-4">
              <Button
                style={`border bg-hoverc bg-cover bg-center text-white border-hoverc [letter-spacing:2px] border-transparent py-3 px-10  font-semibold rounded-lg cursor-pointer hover:bg-gray-800`}
                text={"SEND A MEESAGE"}
              />
            </div>
          </form>
        </div>
        <div className="lg:px-30 px-5">
          <h2 className="text-white text-5xl mb-4">SOCIAL LINKS</h2>
          <div className=" flex text-hoverc items-center space-x-8 ">
            <FaInstagram className=" text-[1.3rem]" />
            <FaFacebook className=" text-[1.3rem]" />
            <FaYoutube className=" text-[1.3rem]" />
            <FaTwitter className=" text-[1.3rem]" />
            <FaPinterest className=" text-[1.3rem]" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurContact;
