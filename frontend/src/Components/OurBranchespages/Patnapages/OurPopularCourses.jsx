import React from "react";
import Button from "../../../CommonUI/Button";
import { IoCallOutline } from "react-icons/io5";
import { fixedbg, program1 } from "../../../Images/Image";
import { programdata } from "../../../Data/data";
import Scroll from "react-scroll-to-element";
const OurPopularCourses = () => {
  return (
    <section
      className="bg-cover bg-center bg-fixed px-4 py-16 lg:py-8 h-full lg:px-30 bg-no-repeat"
      style={{
        backgroundImage: `url(${fixedbg})`,
      }}
    >
      <div>
        <h2 className="text-white text-center w-full text-5xl pb-10 font-bold">
          Our Popular Courses
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {programdata.map((value, key) => (
            <>
              <div className="bg-bgc p-4  rounded-xl">
                <img src={value.image} alt="program" />
                <h2 className="text-hoverc text-3xl font-semibold py-2">
                  MAKEUP MASTERY PROGRAM
                </h2>
                <p className="text-white text-[1.1rem] mb-6">
                  Discover the UK International London Beauty School's 3 to
                  4-month makeup artistry courses, including Foundation of
                  Makeup Artistry, Advance International Makeup Artistry, and
                  SFX Makeup Mastery.
                </p>{" "}
                <Scroll type="id" element="target-component">
                  <Button
                    style={`flex items-center hover:bg-hoverc hover:text-white hover:border-hoverc cursor-pointer border-2 px-4 py-3 rounded-[2rem]  text-hoverc`}
                    text={"ENQUIRY NOW"}
                  />
                </Scroll>
              </div>
            </>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurPopularCourses;
