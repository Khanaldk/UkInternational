import React from "react";
import { coursesimg } from "../../Images/Image";

const Coursesherosection = () => {
  return (
    <section
      className=" bg-cover -mt-20 lg:-mt-3 bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${coursesimg})`,
        height: "60vh",
        paddingBottom: "2rem",
      }}
    >
      <h2 className="text-white text-5xl  flex justify-center items-center h-full mt-20">
        Courses
      </h2>
    </section>
  );
};

export default Coursesherosection;
