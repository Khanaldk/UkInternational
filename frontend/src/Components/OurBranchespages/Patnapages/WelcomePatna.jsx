import React from "react";
import Button from "../../../CommonUI/Button";
import { IoCallOutline } from "react-icons/io5";
import { FaWhatsapp } from "react-icons/fa";
import { beautyimg, brushbg } from "../../../Images/Image";

const WelcomePatna = () => {
  return (
    <section
      className="bg-center px-4 bg-cover bg-no-repeat py-8 lg:py-16"
      style={{
        backgroundImage: `url(${brushbg})`,
      }}
    >
      <div className="lg:flex items-center justify-around ">
        <div className="">
          <h3 className="text-white text-2xl py-2">WELCOME TO PATNA</h3>
          <h1 className="text-hoverc text-4xl  py-1 lg:w-[70%]">
            {" "}
            LONDON BEAUTY SCHOOL
          </h1>
          <p className="text-white text-2xl pb-4 lg:w-[70%]">
            India's No.1 International Beauty School
          </p>
          <div className="lg:flex items-center space-y-4 md:space-y-0 space-x-8">
            <Button
              style={`flex items-center hover:bg-hoverc hover:text-white hover:border-hoverc cursor-pointer border-2 px-4 py-3 rounded-[2rem]  text-hoverc`}
              text={"CALL NOW"}
              spanvalue={<IoCallOutline className="mx-2 text-2xl" />}
            />
            <Button
              style={`flex items-center border-2 hover:bg-lime-500 hover:text-white hover:border-lime-500 cursor-pointer px-4 py-3  rounded-[2rem] text-lime-500`}
              text={"WHATSAPP"}
              spanvalue={<FaWhatsapp className="mx-2 text-2xl" />}
            />
          </div>
        </div>
        <div>
          <img src={beautyimg} alt="img" width={300} />
        </div>
        <div className=" bg-bgc px-6 py-5 lg:w-[25%]">
          <h2 className="text-hoverc text-3xl text-center pb-4">
            Get A Enquiry
          </h2>
          <form action="" className="space-y-3">
            <div>
              <input
                className="placeholder:text-gray-400 rounded-md w-[100%] py-2 px-2 bg-white"
                type="text"
                name=""
                id=""
                placeholder="Enter Name"
              />
            </div>
            <div>
              <input
                className="placeholder:text-gray-400 rounded-md  w-[100%]  p-2 bg-white"
                type="email"
                name=""
                id=""
                placeholder="Enter Email"
              />
            </div>
            <div>
              <input
                className="placeholder:text-gray-400 rounded-md  w-[100%]  p-2 bg-white"
                type="text"
                name=""
                id=""
                placeholder="Enter Phone"
              />
            </div>
            <div>
              <textarea
                className="placeholder:text-gray-400 rounded-md  w-[100%]  p-2 bg-white"
                name=""
                id=""
                placeholder="Message"
              ></textarea>
            </div>
            <div className="text-center">
              <Button
                style={`text-hoverc border-2 border-hoverc px-6 py-3 rounded-[2rem] hover:bg-hoverc hover:text-white`}
                text={"SUBMIT NOW"}
              />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default WelcomePatna;
