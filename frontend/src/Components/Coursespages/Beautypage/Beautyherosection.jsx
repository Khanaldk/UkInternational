import React from "react";
import { beauty } from "../../../Images/Image";

const Beautyherosection = () => {
  return (
    <section
      className=" bg-cover -mt-20 lg:-mt-6 bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${beauty})`, height: "60vh" }}
    >
      <h2 className="text-white text-5xl  flex justify-center items-center h-full mt-20">
        Beauty
      </h2>
    </section>
  );
};

export default Beautyherosection;
