import React from "react";
import { ourbranchesimg } from "../../Images/Image";

const OurBranchesherosection = () => {
  return (
    <section
      className=" bg-cover bg-center -mt-20 lg:-mt-6 bg-no-repeat"
      style={{ backgroundImage: `url(${ourbranchesimg})`, height: "60vh" }}
    >
      <h2 className="text-white text-5xl  flex justify-center items-center h-full mt-20">
        Our Branches
      </h2>
    </section>
  );
};

export default OurBranchesherosection;
