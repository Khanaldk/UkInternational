import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import { NavLink } from "react-router-dom";

const ExploreTopics = () => {
  return (
    <section>
      <div className="border border-gray-500 rounded-2xl p-6  mt-8">
        <div className="text-white flex justify-center">
          <div className="space-y-2">
            <h2 className="text-xl">Explore Topics</h2>
            <hr className="text-gray-500" />
          </div>
        </div>
        <div className="mt-4 flex items-center justify-between">
          <div className="flex items-center space-x-6">
            <IoIosArrowForward className="text-hoverc text-xl " />
            <NavLink to={`/blogs`}>
              <h2 className="text-white hover:text-hoverc">Blog</h2>
            </NavLink>
          </div>
          <p className="text-white">(12)</p>
        </div>
      </div>
    </section>
  );
};

export default ExploreTopics;
