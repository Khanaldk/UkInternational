import React from "react";
import Button from "../../CommonUI/Button";

const Searchpart = () => {
  return (
    <section className="">
      <div className="border border-gray-500 rounded-2xl p-2 lg:p-6  mt-8">
        <h2 className="text-white text-[1.1rem]">Search</h2>
        <form action="" className="space-x-4">
          <input
            type="text"
            className="bg-white p-3 rounded-3xl focus:outline-none"
          />
          <Button
            style="bg-hoverc cursor-pointer text-white px-8 py-3 rounded-3xl"
            text="Search"
          />
        </form>
      </div>
    </section>
  );
};

export default Searchpart;
