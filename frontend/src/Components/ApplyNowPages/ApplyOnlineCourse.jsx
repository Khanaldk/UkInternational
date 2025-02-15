import React, { useState } from "react";
import { logobg, downlogo } from "../../Images/Image";
import Button from "../../CommonUI/Button";

const ApplyOnlineCourse = () => {
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
      style={{
        backgroundImage: `url(${logobg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundColor: "black",
      }}
    >
      <div className="flex justify-around items-center px-20  space-x-16">
        <div>
          <h2 className="text-5xl my-6 w-[80%] text-white font-semibold">
            SEND A MESSAGE OR BOOK YOUR COURSES ONLINE
          </h2>
          <p className="text-white py-4 w-[70%]">
            Take the first step towards your beauty career. Send us a message or
            book your courses today to join UK International and transform your
            passion into professional success.
          </p>
          <div className="flex items-center space-x-10">
            <img
              className="bg-black px-8 py-6 "
              src={downlogo}
              alt="logouk"
              width={280}
            />
            <div className="space-y-8">
              <div>
                <p className="text-hoverc text-5xl">6963</p>
                <span className="text-white text-xl">Joined Students</span>
              </div>
              <div>
                <hr className="h-2 text-white" />
              </div>
              <div>
                <p className="text-hoverc text-5xl">3260 </p>
                <span className="text-white text-xl">
                  Internship's Provided
                </span>
              </div>
            </div>
          </div>
        </div>
        <form
          action=""
          className="space-y-10 bg-black mt-36 mb-10 p-10 w-[50%]"
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
            placeholder="Email Id"
          />
          <div className="space-x-4">
            <input
              type="text"
              name=""
              id=""
              className="placeholder:text-white  text-white focus:outline-none w-[48%] border-b-2 p-4  border-white"
              placeholder="Enter Phone"
            />
            <select
              className="p-4 placeholder:text-white text-white w-[48%]  rounded-lg border-b-2  focus:outline-none  cursor-pointer"
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
          <input
            type="text"
            name=""
            id=""
            className="placeholder:text-white  text-white focus:outline-none w-[100%] border-b-2 p-4  border-white"
            placeholder="Enter a City"
          />
          <input
            type="file"
            name=""
            id=""
            className="  text-white file:bg-white file:text-black file:border file:border-gray-300 file:rounded-sm file:px-4 file:py-2 hover:file:bg-gray-100 focus:outline-none w-[100%] border-b-2 p-4  border-white"
          />

          <Button
            style={`border border-hoverc [letter-spacing:2px] text-white border-transparent py-4 px-10 bg-hoverc font-semibold rounded-xl cursor-pointer hover:bg-gray-800`}
            text={"SUBMIT"}
          />
        </form>
      </div>
    </section>
  );
};

export default ApplyOnlineCourse;
