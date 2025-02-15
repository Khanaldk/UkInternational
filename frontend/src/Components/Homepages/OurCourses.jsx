import React, { useEffect, useState } from "react";
import { coursedata } from "../../Data/data";
import Button from "../../CommonUI/Button";
import { NavLink } from "react-router-dom";

const OurCourses = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(coursedata);
  }, [coursedata]);

  return (
    <section className="bg-black px-4 lg:px-40 py-4  overflow-hidden lg:py-8">
      <h1 className="text-white text-center text-3xl md:text-left md:text-5xl pb-2 font-semibold">
        OUR <span className="text-hoverc">COURSES</span>
      </h1>
      <hr className="h-[2px] md:w-[40%] mt-2 border-none bg-gradient-to-r from-black via-[#f906a0] to-black" />

      <div className="mt-5 grid grid-cols-1  lg:grid-cols-3 gap-10">
        {data.map((value, key) => (
          <div key={key} className="relative h-auto  md:h-[80vh] lg:h-[50vh]">
            <img
              className="w-full h-[50vh] md:h-[60vh] xl:h-[40vh] object-cover"
              src={value.image}
              alt="course"
            />

            <div className="absolute -bottom-6 h-auto left-5 right-5 p-2 md:p-5 bg-black border-4 border-hoverc">
              <h2 className="text-white text-center py-2 text-lg font-semibold">
                {value.head}
              </h2>
              <ul className="text-white space-y-2 list-disc list-inside">
                {value.list.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>

              <div className="text-center mt-4">
                <NavLink to={``}>
                  <Button
                    style={`text-white py-2 px-4 hover:text-hoverc cursor-pointer`}
                    text={"READ MORE"}
                  />
                </NavLink>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurCourses;
