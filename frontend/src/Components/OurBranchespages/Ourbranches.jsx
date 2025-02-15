import React from "react";
import { branchData } from "../../Data/data";
import { NavLink } from "react-router-dom";

const Ourbranches = () => {
  return (
    <section className="bg-black px-4 py-8">
      <div className="grid place-items-center">
        <h2 className="text-hoverc text-3xl text-center md:text-justify md:text-5xl pb-2  font-semibold">
          OUR BRANCHES
        </h2>
        <hr className="h-[2px] w-[70%] mb-4 border-none bg-gradient-to-r  from-black via-[#f906a0] to-black" />
      </div>
      <div className="text-white grid grid-cols-1 lg:grid-cols-3 lg:px-30">
        {branchData.map((value, key) => (
          <>
            <NavLink to={value.url}>
              {" "}
              <div className="border-1 space-y-5 border-white px-10 py-28 cursor-pointer hover:bg-hoverc">
                <h2 className="text-2xl ">Patna</h2>
                <p>
                  7th floor, SKU Centre, Boring Rd, Anandpuri, Patna, Bihar
                  800001.
                </p>
                <span>+91 8686860050</span>
              </div>
            </NavLink>
          </>
        ))}
      </div>
    </section>
  );
};

export default Ourbranches;
