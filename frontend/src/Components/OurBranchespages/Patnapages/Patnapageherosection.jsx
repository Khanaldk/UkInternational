import React from "react";
import { patnaimg } from "../../../Images/Image";

const Patnapageherosection = () => {
  return (
    <section
      id="target-component"
      className=" bg-cover bg-center -mt-20 lg:-mt-4 bg-no-repeat"
      style={{ backgroundImage: `url(${patnaimg})`, height: "60vh" }}
    >
      <h2 className="text-white text-5xl  flex justify-center items-center h-full mt-20">
        Patna
      </h2>
    </section>
  );
};

export default Patnapageherosection;
