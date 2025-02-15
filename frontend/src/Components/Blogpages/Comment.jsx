import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import { NavLink } from "react-router-dom";

const Comment = () => {
  return (
    <section className="">
      <div className="border border-gray-500 rounded-2xl py-10 px-6  mt-8">
        <h2 className="text-3xl text-white font-semibold">Recent Comments</h2>
        <p className="text-white mt-2">No comments to show.</p>
      </div>
    </section>
  );
};

export default Comment;
