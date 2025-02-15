import React, { useState } from "react";
import { blogData } from "../../Data/data";
import { blogminiimg } from "../../Images/Image";
import { NavLink } from "react-router-dom";

const PopularAndRecentPost = () => {
  const [selectedCategory, setSelectedCategory] = useState("Popular");

  const filteredData = blogData.filter(
    (post) => post.category === selectedCategory
  );

  return (
    <section className="border rounded-2xl border-gray-500 mt-4 lg:mt-2 py-4 lg:py-8 lg:w-[30%]">
      <div>
        <div className="lg:flex items-center justify-around px-8 lg:px-0 space-x-2 lg:space-x-0  ">
          <button
            onClick={() => setSelectedCategory("Popular")}
            className={`px-10 rounded-3xl py-2 border cursor-pointer border-gray-500 ${
              selectedCategory === "Popular"
                ? "bg-hoverc text-white"
                : "text-gray-400"
            }`}
          >
            Popular
          </button>
          <button
            onClick={() => setSelectedCategory("Recent")}
            className={`px-10 rounded-3xl py-2 cursor-pointer border border-gray-500 ${
              selectedCategory === "Recent"
                ? "bg-hoverc text-white"
                : "text-gray-400"
            }`}
          >
            Recent
          </button>
        </div>

        <div className="mt-4">
          {filteredData.map((value, index) => (
            <div key={index}>
              <div className="flex p-4 items-center space-x-6">
                <img
                  className="rounded-full "
                  src={blogminiimg}
                  alt=""
                  width={70}
                />
                <div>
                  <NavLink to={`/blog-description`}>
                    <h2 className="text-white hover:text-hoverc">
                      {value.heading}
                    </h2>
                  </NavLink>
                  <p className="text-gray-500">{value.date}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularAndRecentPost;
