import React from "react";
import { accredationandaward } from "../../Images/Image";

const AccredationAndAwardherosection = () => {
  return (
    <section
      className=" bg-cover -mt-20 lg:-mt-4 bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${accredationandaward})`, height: "60vh" }}
    >
      <h2 className="text-white text-3xl md:text-5xl  flex justify-center items-center h-full mt-20">
        Accreditations & Awards
      </h2>
    </section>
  );
};

export default AccredationAndAwardherosection;
