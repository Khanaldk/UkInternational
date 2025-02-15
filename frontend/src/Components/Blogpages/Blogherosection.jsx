import React from "react";
import { blogimg } from "../../Images/Image";
import Button from "../../CommonUI/Button";
import BlogList from "./BlogList";
import PopularAndRecentPost from "./PopularAndRecentPost";

const Blogherosection = () => {
  return (
    <section className="bg-black py-1  lg:py-10 px-2 lg:px-30 ">
      <div className="lg:flex justify-between lg:mt-30">
        <div>
          <div
            className="flex rounded-xl inset-0 bg-orange-200 opacity-70 items-end p-8 text-white 
          bg-cover bg-center w-full h-[70vh] md:h-[60vh] lg:h-[70vh]"
            style={{ backgroundImage: `url(${blogimg})` }}
          >
            <div className="  p-4 w-full">
              <Button style={`bg-hoverc px-4 py-1 rounded-3xl`} text={"Blog"} />
              <p className="text-3xl font-semibold mt-2">
                Best Makeup Artist Course in Delhi
              </p>
              <div className="mt-2 text-sm flex space-x-6">
                <p>UKInternational</p>
                <span>November 11, 2024</span>
              </div>
            </div>
          </div>
        </div>
        <PopularAndRecentPost />
      </div>
    </section>
  );
};

export default Blogherosection;
