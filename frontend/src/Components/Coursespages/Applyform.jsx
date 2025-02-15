import React from "react";
import { applyform } from "../../Images/Image";
import Button from "../../CommonUI/Button";

const Applyform = () => {
  return (
    <section
      className="bg-center bg-cover bg-no-repeat py-10 lg:py-20"
      style={{ backgroundImage: `url(${applyform})` }}
    >
      <div className=" grid place-items-center">
        <div className="bg-white rounded-md lg:w-[70%] mx-4  lg:px-10 py-5">
          <h2 className="text-center text-3xl font-semibold pb-8">Apply Now</h2>
          <form action="" className="text-gray-400 px-4 ">
            <div className=" space-y-4 lg:space-x-6 lg:space-y-0">
              {" "}
              <input
                className="text-black border-gray-400  rounded-md w-full lg:w-[48.5%] px-3 py-2  placeholder:text-gray-400 border-1 "
                type="text"
                name=""
                id=""
                placeholder="Enter Name"
              />
              <input
                className="text-black border-gray-400 rounded-md w-full lg:w-[48.5%] px-3 py-2 placeholder:text-gray-400 border-1"
                type="email"
                name=""
                id=""
                placeholder="Email Id"
              />
            </div>
            <div className="space-y-4 mt-4 lg:mt-0 lg:space-x-6 lg:space-y-0 lg:py-8">
              <input
                className="text-black border-gray-400 rounded-md w-full lg:w-[48.5%] px-3 py-2  placeholder:text-gray-400 border-1"
                type="text"
                name=""
                id=""
                placeholder="Enter Phone"
              />
              <input
                className="text-black border-gray-400 rounded-md w-full lg:w-[48.5%] px-3 py-2  placeholder:text-gray-400 border-1"
                type="text"
                name=""
                id=""
                placeholder="Course"
              />
            </div>
            <textarea
              className="border-1 mt-4 md:mt-0 border-gray-400 rounded-md w-full px-3 h-28 placeholder:text-gray-400 "
              name=""
              id=""
              placeholder="Write Message"
            ></textarea>
            <div className="text-center mt-4">
              <Button
                style={`border text-white border-hoverc w-full [letter-spacing:2px] border-transparent py-4 px-6 bg-hoverc font-semibold rounded-lg cursor-pointer hover:bg-gray-800`}
                text={"SUBMIT"}
              />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Applyform;
