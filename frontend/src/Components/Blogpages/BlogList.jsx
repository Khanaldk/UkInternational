import React, { useState } from "react";
import { blogimg } from "../../Images/Image";
import Button from "../../CommonUI/Button";
import { blogData } from "../../Data/data";
import { FaRegCircleUser } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
import { IoShareSocialOutline } from "react-icons/io5";
import { BsThreeDots } from "react-icons/bs";
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaPinterest,
} from "react-icons/fa";
import { BsDashLg } from "react-icons/bs";
import { RxCrossCircled } from "react-icons/rx";
import Searchpart from "./Searchpart";
import RecentPost from "./RecentPost";
import PopularPost from "./PopularPost";
import ExploreTopics from "./ExploreTopics";
import Comment from "./Comment";
import Celebration from "./Celebration";

const BlogList = () => {
  const [activeId, setActiveId] = useState(null);

  return (
    <section className="bg-black px-2 lg:px-30">
      <div className="lg:flex space-x-21 lg:space-x-30">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-3 lg:gap-x-30 w-auto lg:w-[80%]">
          {blogData.map((value, index) => (
            <div
              key={index}
              className="flex items-center px-2 lg:px-0 justify-center  lg:ml-0"
            >
              <div>
                <div
                  className="mt-8 flex rounded-t-lg items-start p-4 text-white"
                  style={{
                    backgroundImage: `url(${blogimg})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundColor: "black",
                    width: "130%",
                    height: "40vh",
                  }}
                >
                  <Button style="bg-hoverc px-4 py-1 rounded-3xl" text="Blog" />
                </div>
                <div className="border-x border-b rounded-b-lg w-[130%] p-4 space-y-4 border-gray-400">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-2">
                      <FaRegCircleUser className="text-white text-2xl" />
                      <NavLink to="">
                        <p className="text-brownc hover:text-hoverc">
                          {value.username}
                        </p>
                      </NavLink>
                    </div>
                    <span className="text-brownc">{value.date}</span>
                  </div>
                  <NavLink to="/blog-description">
                    <p className="text-white text-xl hover:text-hoverc">
                      {value.heading}
                    </p>
                  </NavLink>
                  <span className="text-white">{value.para}</span>
                  <hr className="text-gray-400 my-5" />
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <button
                        onClick={() =>
                          setActiveId(activeId === index ? null : index)
                        }
                        className="cursor-pointer"
                      >
                        {activeId === index ? (
                          <RxCrossCircled className="text-gray-500 text-2xl" />
                        ) : (
                          <IoShareSocialOutline className="text-gray-500 text-2xl" />
                        )}
                      </button>

                      {activeId === index && (
                        <div className="flex text-gray-500 space-x-3 lg:space-x-3">
                          <BsDashLg className="text-[1.1rem]" />
                          <FaInstagram className="text-[1.1rem]" />
                          <FaFacebook className="text-[1.1rem]" />
                          <FaYoutube className="text-[1.1rem]" />
                          <FaTwitter className="text-[1.1rem]" />
                          <FaPinterest className="text-[1.rem]" />
                        </div>
                      )}
                    </div>
                    <NavLink to={`/blog-description`}>
                      {" "}
                      <BsThreeDots className="text-gray-500 hover:text-hoverc text-2xl" />
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div>
          <Searchpart />
          <RecentPost />
          <Comment />
          <PopularPost />
          <ExploreTopics />
          <Celebration />
        </div>
      </div>
    </section>
  );
};

export default BlogList;
