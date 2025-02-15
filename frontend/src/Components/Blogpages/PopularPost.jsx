import React from "react";
import { blogData } from "../../Data/data";
import { blogminiimg } from "../../Images/Image";
import { NavLink } from "react-router-dom";

const PopularPost = () => {
  const filteredData = blogData.filter((blog) => blog.category === "Popular");
  return (
    <section>
      <div className="border border-gray-500 rounded-2xl p-6  mt-8">
        <div className="text-white flex justify-center">
          <div className="space-y-2">
            <h2 className="text-xl">Popular Posts</h2>
            <hr className="text-gray-500" />
          </div>
        </div>
        <div className="space-y-4 mt-2">
          {filteredData.map((item, id) => (
            <>
              <div key={id} className="flex items-center space-x-8">
                <img
                  className="rounded-full "
                  src={blogminiimg}
                  alt=""
                  width={70}
                />
                <div className="space-y-1">
                  <NavLink to={`/blog-description`}>
                    <h2 className="text-white hover:text-hoverc cursor-pointer">
                      {item.heading}
                    </h2>
                  </NavLink>
                  <p className="text-gray-500">{item.date}</p>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularPost;
