import React from "react";
import { galleryimg } from "../../../Images/Image";

const Makeupherosection = () => {
  return (
    <section
      className=" bg-cover -mt-20 lg:-mt-6 bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${galleryimg})`, height: "60vh" }}
    >
      <h2 className="text-white text-5xl  flex justify-center items-center h-full mt-20">
        MakeUp
      </h2>
    </section>
  );
};

export default Makeupherosection;
