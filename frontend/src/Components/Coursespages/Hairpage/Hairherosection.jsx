import React from "react";
import { hairimg } from "../../../Images/Image";

const Hairherosection = () => {
  return (
    <section
      className=" bg-cover -mt-20 lg:-mt-6 bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${hairimg})`, height: "60vh" }}
    >
      <h2 className="text-white text-5xl  flex justify-center items-center h-full mt-20">
        Hair
      </h2>
    </section>
  );
};

export default Hairherosection;
