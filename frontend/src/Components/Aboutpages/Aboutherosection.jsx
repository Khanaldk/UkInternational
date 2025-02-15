import React from "react";
import { aboutusimg } from "../../Images/Image";

const Aboutherosection = () => {
  return (
    <section
      className=" bg-cover bg-center -mt-20 lg:-mt-3 bg-no-repeat"
      style={{ backgroundImage: `url(${aboutusimg})`, height: "60vh" }}
    >
      <h2 className="text-white text-5xl  flex justify-center items-center h-full mt-20">
        About Us
      </h2>
    </section>
  );
};

export default Aboutherosection;
