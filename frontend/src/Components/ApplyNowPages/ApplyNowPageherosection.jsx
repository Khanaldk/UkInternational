import React from "react";
import { patnaimg } from "../../Images/Image";

const ApplyNowPageherosection = () => {
  return (
    <section
      className=" bg-cover bg-center -mt-3 bg-no-repeat"
      style={{ backgroundImage: `url(${patnaimg})`, height: "60vh" }}
    >
      <h2 className="text-white text-5xl  flex justify-center items-center h-full mt-20">
        Apply Now
      </h2>
    </section>
  );
};

export default ApplyNowPageherosection;
