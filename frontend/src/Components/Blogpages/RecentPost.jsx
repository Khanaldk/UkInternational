import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import { blogData } from "../../Data/data";
import { NavLink } from "react-router-dom";

const RecentPost = () => {
  const filteredData = blogData.filter((blog) => blog.category === "Recent");

  return (
    <section className="">
      <div className="border border-gray-500 rounded-2xl p-6 mt-8">
        <h2 className="text-white text-4xl mb-4">Recent Posts</h2>
        <hr className="text-gray-500" />
        <div className="space-y-4 mt-2">
          {filteredData.map((item, id) => (
            <>
              <div key={id} className="flex items-center space-x-2">
                <IoIosArrowForward className="text-hoverc text-2xl " />
                <NavLink to={`/blog-description`}>
                  <h2 className="text-white hover:text-hoverc cursor-pointer">
                    {item.heading}
                  </h2>
                </NavLink>
              </div>
            </>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecentPost;
