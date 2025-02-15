import React, { useState } from "react";
import { logobg, downlogo } from "../../Images/Image";
import Button from "../../CommonUI/Button";

const StudentRegistrationForm = () => {
  const [selectedCourse, setSelectedCourse] = useState("");

  const courses = [
    "Girls Makeup",
    "Hair Styling",
    "Nail Art",
    "Skin Care",
    "Bridal Makeup",
    "Fashion Styling",
    "Hair Coloring",
    "Personal Grooming",
    "Eyelash Extensions",
  ];

  return (
    <section
      className="py-8 lg:py-0 "
      style={{
        backgroundImage: `url(${logobg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundColor: "black",
      }}
    >
      <div className="lg:flex justify-around items-center lg:px-20  lg:space-x-16">
        <div>
          <h2 className="text-5xl text-center md:text-justify md:my-10 text-white font-semibold">
            STUDENTS <span className="text-hoverc ">REGISTRATION</span>{" "}
          </h2>
          <div className="grid place-content-center">
            <img src={downlogo} alt="logouk" width={280} />
          </div>
        </div>
        <form
          action=""
          className="space-y-10 bg-black mt-8 lg:mt-36 mb-10 p-5 lg:p-10 lg:w-[50%]"
        >
          <input
            className="placeholder:text-white text-white focus:outline-none w-[100%] border-b-2 p-4  border-white"
            type="text"
            name=""
            id=""
            placeholder="Name"
          />
          <input
            type="email"
            name=""
            id=""
            className="placeholder:text-white  text-white focus:outline-none w-[100%] border-b-2 p-4 border-white"
            placeholder="Email Address"
          />
          <div className=" space-y-6 lg:space-y-0 space-x-4">
            <input
              type="text"
              name=""
              id=""
              className="placeholder:text-white  text-white focus:outline-none w-full lg:w-[48%] border-b-2 p-4  border-white"
              placeholder="Enter Phone"
            />
            <select
              className="p-4 placeholder:text-white text-white w-full lg:w-[48%]  rounded-lg border-b-2  focus:outline-none  cursor-pointer"
              value={selectedCourse}
              onChange={(e) => setSelectedCourse(e.target.value)}
            >
              <option value="" disabled>
                Select a course
              </option>
              {courses.map((course, index) => (
                <option
                  className="text-white bg-black"
                  key={index}
                  value={course}
                >
                  {course}
                </option>
              ))}
            </select>
          </div>
          <div className=" space-y-6 lg:space-y-0 space-x-2">
            <input
              type="text"
              name=""
              id=""
              className="placeholder:text-white  text-white focus:outline-none w-full lg:w-[49%] border-b-2 px-4 py-5  border-white"
              placeholder="Enter Your City"
            />
            <input
              type="file"
              name=""
              id=""
              className="  text-white file:bg-white file:text-black file:border file:border-gray-300 file:rounded-sm file:px-4 file:py-1  hover:file:bg-gray-100 focus:outline-none lg:w-[49%] border-b-2 p-4  border-white"
            />
          </div>

          <Button
            style={`border border-hoverc [letter-spacing:2px] text-white border-transparent py-4 px-10 bg-hoverc font-semibold rounded-xl cursor-pointer hover:bg-gray-800`}
            text={"SUBMIT"}
          />
        </form>
      </div>
    </section>
  );
};

export default StudentRegistrationForm;
