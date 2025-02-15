import React from "react";
import { contactimg } from "../../Images/Image";

const Contactherosection = () => {
  return (
    <section
      className=" bg-cover bg-center -mt-20 lg:-mt-6 bg-no-repeat"
      style={{ backgroundImage: `url(${contactimg})`, height: "60vh" }}
    >
      <h2 className="text-white text-5xl  flex justify-center items-center h-full mt-20">
        Contact Us
      </h2>
    </section>
  );
};

export default Contactherosection;
